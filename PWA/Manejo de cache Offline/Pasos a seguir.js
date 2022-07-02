// FORMAS DE TRABAJAR DE MANERA OFFLINE

    // 1. Detectar cuando tenemos conexion o la conexion falla

        self.addEventListener('fetch', event => {

            // Este es el mensaje que aparecera cuando no tenga conexion a interent y que no salga la
            // pantalla fea que salia del navegador cuando no tenemos conexion a internet

                const offlineResp = new Response(`
                
                    Bienvenido a mi pagina web

                    Disculpas, pero para usarla, necesitas internet
                    
                `, { 
                    // tambien podemos cargar codigo html como diseño en este caso le agregamos lo siguiente  
                    // esto solo para imprimir codigo html, si es texto normal solo hasta el )
                    headers: {
                        'Content-Type': 'text/html'
                    }
                })

                // para llamar un archivo html offline lo hacemos mediante estrategia del cache                
                const offlineResp2 = fetch( 'pages/offline.html' );


                // aqui imprimimos el contenido
                const resp = fetch( event.request )
                    .catch( () => {
                        return offlineResp
                    } )

                event.respondWith( resp )

        })

    // 2 Manejo de cache: 

        if ( window.caches ) {
            caches.open('prueba-2'); // Mira el cache e intenta abrir algo con nombre prueba-2 y si no 
                                    // existe creala

            caches.has('prueba-2').then( console.log ); // verificar si existe algo en el cache guardado                                                    

            caches.delete('prueba-1').then( console.log ); // para borrar cache


            caches.open('cache-v1.1').then( cache => { // almacenar una pagina html en el cache
                cache.addAll([ // addAll para varias cosas en el cache y add nada mas para algo especificico
                    '/index.html',
                    '/css/style.css',
                    '/img/main.jpg'
                ]).then( () => {
                    cache.delete('/css/style.css')  // para borrar algo especifico dentro del cache
                                                    // referente a una archivo especifico no contenido

                    cache.put( 'index.html', new Response('Hola Mundo') ); // para remplazar el contenido 
                                                                           // viejo por algo nuevo siempre
                                                                           // informacion del cache

                    // para leer la informacion de un archivo especifico del cache a un archivo especifico
                        cache.match('/index.html')
                            .then( res => {
                                res.text().then( console.log );
                            });
                })
            })

            // recorrer / leer todos los archivos del cache
                caches.keys().then( keys => {
                    console.log(keys);
                });
        }


// App Shell: Guardar el en cache lo que la aplicacion necesita a fuerza para funcionar: stylos, index, imagen, etc
// y que queremos cargar rapidamente

    // Variables comun y corrientes solo para una estica mejor
        const CACHE_STATIC_NAME  = 'static-v6';
        const CACHE_DYNAMIC_NAME = 'dynamic-v1';
        const CACHE_INMUTABLE_NAME = 'inmutable-v1';
        
        const CACHE_DYNAMIC_LIMIT = 50;

    self.addEventListener('install', e => {

        // 1. Abrir un cache
        const cacheProm = caches.open( CACHE_STATIC_NAME )
            .then( cache => {
                // Contenido a guardar
                return cache.addAll([
                    '/', // este siempre agregar porque es un error dificil de encontrar despues
                    '/index.html',
                    '/css/style.css',
                    '/img/main.jpg',
                    '/js/app.js',
                    '/img/no-img.jpg',
                    '/pages/offline.html'
                ]);            
            });

        // los estilos imutables son mejor guardarlos en un cache aparte es decir aquellos archivos o librerias que no van a cambiar su version tan seguido
            const cacheInmutable = caches.open( CACHE_INMUTABLE_NAME )
                    .then( cache => cache.add('https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'));


        e.waitUntil( Promise.all([cacheProm, cacheInmutable]) );

    });

// ESTRATEGIAS DEL CACHE

            // funcion para limpiar el cache y asingar un limite de elementos a guardar
            function limpiarCache( cacheName, numeroItems ) {
                caches.open( cacheName )
                    .then( cache => {
                        return cache.keys()
                            .then( keys => {                                
                                if ( keys.length > numeroItems ) {
                                    cache.delete( keys[0] )
                                        .then( limpiarCache(cacheName, numeroItems) );
                                }
                            });
                    });
            }

    // van dentro del evento fetch
    self.addEventListener('fetch', e => {

        // 1: Cache Only: es aquel contenido especifico que no entra nunca a la web 
        // y no sale de el si no del cache
            e.respondWith( caches.match( e.request ) );

        // 2.: network with cache fallback ( es decir primero revisa el cache y si no encuentras nada
        // o no funciona y da error el cache ve a la web ) // PARA RECURSOS MOBILES Y WEB
            const respuesta = caches.match( e.request )
                .then( res => {
                    if ( res ) return res; // si existe en localstorage ya no sigue porque ya existe

                    // No existe el archivo
                    // tengo que ir a la web
                    console.log('No existe', e.request.url );

                    return fetch( e.request ).then( newResp => {
                        caches.open( CACHE_DYNAMIC_NAME )
                            .then( cache => {
                                cache.put( e.request, newResp );
                                limpiarCache( CACHE_DYNAMIC_NAME, 50 ); // los caches dinamicos 
                                // son los que suelen limpiarce porque pueden ir cambiando
                                // y un limite
                            });
                        return newResp.clone();
                    });
                });

            e.respondWith( respuesta );

        // 3- Network with cache fallback: Primero baya a internet y si lo tiene muestralo y si no 
        // lo tiene intenta buscarlo en el cache
            const respuesta2 = fetch( e.request ).then( res => {
                if ( !res ) return caches.match( e.request );
                caches.open( CACHE_DYNAMIC_NAME )
                    .then( cache => {
                        cache.put( e.request, res );
                        limpiarCache( CACHE_DYNAMIC_NAME, CACHE_DYNAMIC_LIMIT );
                    });
                return res.clone();

            }).catch( err =>{
                return caches.match( e.request );
            });

            e.respondWith( respuesta2 );

        // 4- Cache with network update:
        // Rendimiento es crítico, necesitamos que aparezca lo mas rapido posible
        // Siempre estarán un paso atrás
            if ( e.request.url.includes('bootstrap') ) {
                return e.respondWith( caches.match( e.request ) );
            }

            const respuesta3 = caches.open( CACHE_STATIC_NAME ).then( cache => {

                fetch( e.request ).then( newRes => 
                        cache.put( e.request, newRes ));

                return cache.match( e.request );

            });

            e.respondWith( respuesta3 );

        // 5- Cache & Network Race: Competencia para ver cual funciona primero cache o internet
            const respuesta4 = new Promise( (resolve, reject) =>{

                let rechazada = false;

                const falloUnaVez = () => {

                    if ( rechazada ) {

                        // no existe en cache ni en internet y podemos hacer que aparezca otra cosa aqui, 
                        // eso tiene que estar en el cache para mostrarlo pues se supone que no tenemos interent
                        if ( /\.(png|jpg)$/i.test( e.request.url ) ) {

                            resolve( caches.match('/img/no-img.jpg')  );

                        } else { 
                            reject('No se encontro respuesta');
                        }

                    } else {
                        rechazada = true;
                    }


                };

                // Internet
                    fetch( e.request ).then( res => {
                        res.ok ? resolve(res) : falloUnaVez();
                    }).catch( falloUnaVez );

                // Cache
                    caches.match( e.request ).then( res => {
                        res ? resolve( res ) : falloUnaVez();
                    }).catch( falloUnaVez );


            });


            e.respondWith( respuesta4 );
    })

// eliminar caches viejos automatico para que no genere demasiado espacio en el dispositivo
    self.addEventListener('activate', e => {


        const respuesta = caches.keys().then( keys => {

            keys.forEach( key => {

                // static-v4
                if (  key !== CACHE_STATIC_NAME && key.includes('static') ) {
                    return caches.delete(key);
                }

            });

        });



        e.waitUntil( respuesta );

    });
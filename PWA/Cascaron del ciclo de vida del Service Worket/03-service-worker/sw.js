
// Ciclo de vida del SW

// Instalacion del Service Worker
self.addEventListener('install', event => {

    // Descargar assets 
    // Creamos un cache
    console.log('SW: Instalando SW');

    const instalacion = new Promise( (resolve, reject) => {

        setTimeout(() => {
            console.log('SW: Instalaciones terminadas');
            self.skipWaiting(); // en modo desarrollo nada mas es para actualizar el service worker 
                                // automatico
            resolve();
        }, 1);

    });

    event.waitUntil( instalacion ); // este evento existe en todos los eventos 
                                    // sirve para hacer que espere de que se termien todas las
                                    // instalaciones para tomar control de la aplicacion

});


// Cuando el SW toma el control de la aplicación
self.addEventListener('activate', event => {

    // Borrar cache viejo aqui se hace es recomendable, es decir del service worket viejo se puede 
    // borrar

    console.log('SW2: Activo y listo para controlar la app');


});


// FETCH: Manejo de peticiones HTTP
self.addEventListener('fetch', event => {

    // Aplicar estrategias del cache
    // Aqui se determina que informacion puedo guardar en la cache, si quiero que esta informacion
    // la reciba el usuario o no
    // console.log( 'SW:', event.request.url );

    // if ( event.request.url.includes('https://reqres.in/') ) {

    //     const resp = new Response(`{ ok: false, mensaje: 'jajaja'}`);

    //     event.respondWith( resp );

    // }

});

// SYNC: Recuperamos la conexión a internet
self.addEventListener('sync', event => {

    console.log('Tenemos conexión!');
    console.log(event);
    console.log(event.tag);

});


// PUSH: Manejar las push notifications
self.addEventListener('push', event => {

    console.log('Notificacion recibida');


});

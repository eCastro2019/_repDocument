// TODO: OJO: importScripts('js/sw-utils.js'); esto se usa para poder utilizar archivos externos

// Instalaciones en dispositivios mobiles // CONFIGURACION CUALQUIER APLICACION WEB A UNA PWA
// Toda la configuracion RADICA EN EL SERVICE WORKERT Y EL MANIFEST

// TODO: PASO 1: ARCHIVO app.js // este paso es el que se agrega en todas las paginas del proyecto
// TODO: para que el service worker tome el control de la aplicacion
    // 1. Verificamos que soporte el service workert
        if ( navigator.serviceWorker ) {}

// TODO: PASO 2: ARCHIVO sw.js // en la raiz del proyecto principal
    // 1. Definimos variables STATIC_CACHE, etc
        const STATIC_CACHE    = 'static-v4';

    // 2. Denimos el APP_SHELL
        const APP_SHELL = [
            '/',
        ]

    // 3. hacemos el proceso de instalacion del service worker
        self.addEventListener('install', e => {})

    // 4. hacemos el proceso de eliminacion del service workert viejo que ya no me va a servir
        self.addEventListener('activate', e => {})

    // 5. Implementar la estrategia del cache que creamos conveniente Todo entra dentro del fetch
        self.addEventListener( 'fetch', e => {

        })










// Configuracion Manifest:  como quiero que mi aplicacion se vea
    // manifest.json
    {
        "short_name": "Twittor", // nombre corto de la aplicacion
        "name": "Twittor para héroes", // nombre detallado de la aplicacion
        "start_url": "index.html", // url de inicio de sesion
        // agregar al archivo index principal la direccion del manifest <link rel="manifest" href="/manifest.json">
        "background_color": "#3498db", // color de fondo del splashscreen
        "theme_color": "#3498db",
        // tambien agregar el theme_color en el index
            // <!-- Android -->
            // <meta name="theme-color" content="#3498db">

            // <!-- IOS -->
            // <meta name="apple-mobile-web-app-capable" content="yes"></meta>
        "display": "standalone", // para quitar la barra de navegacion
        "orientation": "portrait", // orientacion de mi aplicacion , si solo horizontal, vertical o ambas
        "icons": [ // agregamos el arreglo de iconos con sus tamaños
            {
                "src": "img/icons/icon-72x72.png",
                "type": "image/png",
                "sizes": "72x72"
            },
            {
                "src": "img/icons/icon-96x96.png",
                "type": "image/png",
                "sizes": "96x96"
            },
            {
                "src": "img/icons/icon-128x128.png",
                "type": "image/png",
                "sizes": "128x128"
            },
            {
                "src": "img/icons/icon-144x144.png",
                "type": "image/png",
                "sizes": "144x144"
            },
            {
                "src": "img/icons/icon-152x152.png",
                "type": "image/png",
                "sizes": "152x152"
            },
            {
                "src": "img/icons/icon-192x192.png",
                "type": "image/png",
                "sizes": "192x192"
            },
            {
                "src": "img/icons/icon-384x384.png",
                "type": "image/png",
                "sizes": "384x384"
            },
            {
                "src": "img/icons/icon-512x512.png",
                "type": "image/png",
                "sizes": "512x512"
            }
          ]
    
    }





// Probar aplicacion en dispositivo mobil, link video 78 pasos en caso se me olvide

// Desplegar aplicacion en algun dominio https gratuito o comprado



// MEJORAR LA APARIENCIA EN IOS

    // en el index se agregan en todas las paginas web index
    // <!-- IOS -->
    // <meta name="apple-mobile-web-app-capable" content="yes">

    // <link rel="apple-touch-icon" href="img/icons/icon-192x192.png">
    // <link rel="apple-touch-icon" sizes="152x152" href="img/icons/icon-152x152.png">
    // <link rel="apple-touch-icon" sizes="180x180" href="img/icons/icon-192x192.png">
    // <link rel="apple-touch-icon" sizes="167x167" href="img/icons/icon-152x152.png"></link>

    // <!-- iPhone X (1125px x 2436px) -->
    // <link rel="apple-touch-startup-image" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)" href="img/icons-ios/apple-launch-1125x2436.png">
    // <!-- iPhone 8, 7, 6s, 6 (750px x 1334px) -->
    // <link rel="apple-touch-startup-image" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)" href="img/icons-ios/apple-launch-750x1334.png">
    // <!-- iPhone 8 Plus, 7 Plus, 6s Plus, 6 Plus (1242px x 2208px) -->
    // <link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3)" href="img/icons-ios/apple-launch-1242x2208.png">
    // <!-- iPhone 5 (640px x 1136px) -->
    // <link rel="apple-touch-startup-image" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)" href="img/icons-ios/apple-launch-640x1136.png"></link>

    // <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">

    // <meta name="apple-mobile-web-app-title" content="Twittor"></meta>

    // css body
    // overscroll-behavior-y: contain; para no refresh del navegador en android
    // -webkit-user-select: none;
    // -webkit-tap-highlight-color: transparent;
    // -webkit-touch-callout: none;

    // remover el nosh // en el index
    // <meta name="viewport" content="width=device-width, initial-scale=1.0, height=device-height, viewport-fit=cover"></meta>
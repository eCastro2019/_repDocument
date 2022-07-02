

// Detectar si podemos usar Service Workers // esto se debe usar siempre en cada pagina de la 
// aplicacion que tengamos 

if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('/sw.js')
            .then( reg => {

                // setTimeout(() => {
                    
                //     reg.sync.register('posteo-gatitos');
                //     console.log('Se enviaron fotos de gatitos al server');

                // }, 3000);

                Notification.requestPermission().then( result => { // obtener permiso para notificaciones
            
                    console.log(result);
                    reg.showNotification('Hola Mundo!');
                    
            
                });

            });         
}


// if ( window.SyncManager ) { }




// fetch('https://reqres.in/api/users')
//     .then( resp => resp.text() )
//     .then( console.log );
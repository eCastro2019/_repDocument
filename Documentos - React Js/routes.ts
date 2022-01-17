import { LazyExoticComponent } from 'react'; // Importamos
import { lazy } from 'react'

type JSXComponent = () => JSX.Element; // Definimos

interface Route {
    path: string;
    component: LazyExoticComponent<JSXComponent> | JSXComponent, // Tipado
    name: string;
    children?: Route[]
}

// Definimos los componentes a renderizar primero que queremos que carguen en un principio

const LazyPage1 = lazy( () => import(/* webpackChunkName: "LazyPage1" */'../01-lazyload/pages/LazyPage1') );
const LazyPage2 = lazy( () => import(/* webpackChunkName: "LazyPage2" */'../01-lazyload/pages/LazyPage2') );
const LazyPage3 = lazy( () => import(/* webpackChunkName: "LazyPage3" */'../01-lazyload/pages/LazyPage3') );

// Especificamos en las rutas el nombre del componente creado mediante lazy

export const routes: Route[] = [
    {
        path: '/lazy1',
        component: LazyPage1,
        name: 'LazyPage-1'
    },
    {
        path: '/lazy2',
        component: LazyPage2,
        name: 'LazyPage-2'
    },
    {
        path: '/lazy3',
        component: LazyPage3,
        name: 'LazyPage-3'
    },
]



// Componente a renderizar lo pasamos a default es decir las pages en donde este definido el componente
// export default LazyPage1;

// Luego envolvemos todo el router / rutas de navegacion en el componente suspense para decirle al usuario, espera estoy cargando la pagina
    // import { Suspense } from 'react';

    // <Suspense fallback={ <span>Loading...</span> }>
        // <Router></Router>
    // </Suspense>
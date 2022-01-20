import { LazyExoticComponent } from 'react';
import { lazy } from 'react'

type JSXComponent = () => JSX.Element;

interface Route {
    path: string;
    component: LazyExoticComponent<JSXComponent> | JSXComponent, // tipo de dato para compoente por lazy
    name: string;
    children?: Route[] // agregar esta parte siempre
}

// WebPackChunkName: es para darle un nombre al chuck que se muestra en el navegador y saber a que
// modulo pertenece dicho lazlyload cargado

const LazyPage1 = lazy( () => import(/* webpackChunkName: "LazyPage1" */'../01-lazyload/pages/LazyPage1') );
const LazyPage2 = lazy( () => import(/* webpackChunkName: "LazyPage2" */'../01-lazyload/pages/LazyPage2') );
const LazyPage3 = lazy( () => import(/* webpackChunkName: "LazyPage3" */'../01-lazyload/pages/LazyPage3') );

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

// Importante agregar a los componentes que se mostraran aqui export default lazyloadpage
import { LazyExoticComponent } from 'react';
import { lazy } from 'react'

import { NoLazy } from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface Route {
    path: string;
    component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string;
    children?: Route[]
}


// Carga por modulos

export const routes: Route[] = [
    // Carga de forma peresoza, este modulo se carga solo cuando entro a este modulo mediante la ruta
    {
        path: '/lazyload',
        component: lazy( () => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout') ),
        name: 'LazyLoading Nested'
    },
    // Carga de forma tradicional, este modulo se carga completo cuando inicio la aplicacion
    {
        path: '/no-lazy',
        component: NoLazy,
        name: 'No Lazy loading'
    }
   
]
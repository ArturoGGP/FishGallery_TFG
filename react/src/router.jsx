import React from 'react';
import Login from "./views/login/Login";
import Signup from './views/signup/Signup';
import NotFound from './views/notfound/NotFound';
import { createBrowserRouter } from 'react-router-dom';
import Dashboard from './views/dashboard/Dashboard';
import { Navigate } from 'react-router-dom';
import Productos from './views/productos/Productos';
import Tiendas from './views/tiendas/Tiendas';
import AdministracionDeProductos from './views/administracionDeProductos/AdministracionDeProductos';
import AdministracionDeUsuarios from './views/administracionDeUsuarios/AdministracionDeUsuarios';
import ProtectedLayout from './layouts/protectedLayout/ProtectedLayout';
import DefaultLayout from './layouts/defaultLayout/DefaultLayout';
import AuthLayout from './layouts/authLayout/AuthLayout';
import Home from './views/home/Home';
import UsuarioForm from './views/formularioUsuario/UsuarioForm';
import ProductoForm from './views/formularioProducto/ProductoForm';
import ContenedorDeImagenes from './views/contenedor-de-imagenes/ContenedorDeImagenes';

const router = createBrowserRouter([

    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/productos',
                element: <Productos />
                        
            },
            {
                path: '/tiendas',
                element: <Tiendas />
            }
        ]
    },
    {
        path: '/',
        element: <ProtectedLayout />,
        children: [
            {
                path: '/mientorno',
                element: <Dashboard />
            },
            {
                path: '/administarProductos',
                element:  <AdministracionDeProductos />
            },
            {
                path: '/administarProductos/:id',
                element: <ProductoForm key="productoEdit"/>
            },
            {
                path: '/administarProductos/nuevo',
                element: <ProductoForm key="productoCreate"/>
            },
            {
                path: '/administarUsuarios',
                element: <AdministracionDeUsuarios />
            },
            {
                path: '/administarUsuarios/:id',
                element: <UsuarioForm key="usuarioEdit"/>
            },
            {
                path: '/administarUsuarios/nuevo',
                element: <UsuarioForm key="usuarioCreate"/>
            },
            {
                path: '/contenedor-de-imagenes',
                element: <ContenedorDeImagenes />
            }
        ]
    },
    {
        path: '/',
        element: <AuthLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            }
        ]
    }
])

export default router

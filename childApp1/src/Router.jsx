import { lazy, useMemo } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Home = lazy( () => import('./components/Home/Home'))
const About = lazy( () => import('./components/About/About'))
const Contact = lazy( () => import('./components/Contact/Contact'))

import MainLayout from './layout/MainLayout'
import env from './service/env'


const CreateRouter = () => {

    const router = useMemo( () => createBrowserRouter([
        {
            path: env('VITE_SITE_URL'),
            element: <MainLayout />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: "about",
                    element: <About />,
                },
                {
                    path: "contact",
                    element: <Contact />,
                },
            ],
        },
    ]), [])


    return (
        <RouterProvider router={router} />
    )
}

const Router = () => <CreateRouter />
export default Router
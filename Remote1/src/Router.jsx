import { lazy, useMemo } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Components
import MainLayout from './layout/MainLayout'
const Home = lazy(() => import('./components/Home/Home'))
const About = lazy(() => import('./components/About/About'))
const Contact = lazy(() => import('./components/Contact/Contact'))

// Services
import env from './service/env'
import isEnterFromHost from './service/isEnterFromHost'


const CreateRouter = () => {

    const router = useMemo(() => createBrowserRouter([
        {
            path: env('VITE_SITE_URL'),
            // path: "/",
            element: <PrivateRoute Component={MainLayout} />,
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


const PrivateRoute = ({ Component }) => {

    return isEnterFromHost() ? <Component /> : <h1>403 Forbidden</h1>

}
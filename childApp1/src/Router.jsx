import { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Home = lazy( () => import('./components/Home/Home'))
const About = lazy( () => import('./components/About/About'))
const Contact = lazy( () => import('./components/Contact/Contact'))

import MainLayout from './layout/MainLayout'
import env from './service/env'


const PrivateRoute = ({ Component }) => {
  console.log('Private')
  const hostURL = env('VITE_HOST_URL')
  const currentURL = window.origin
  return hostURL === currentURL ? <Component /> : <h1>Error</h1>
}


const CreateRouter = () => {

    const router = createBrowserRouter([
        {
          path: env('VITE_SITE_URL'),
          element: <PrivateRoute Component={MainLayout} />,
          children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: 'about',
              element: <About />,
            },
            {
              path: 'contact',
              element: <Contact />,
            },
          ],
        },
        {
            path: '*',
            element: <h1>Error Route (childApp)</h1>
        }
      ]);


    return (
        <RouterProvider router={router} />
    )
}

const Router = () => <CreateRouter />
export default Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

import MainLayout from './layout/MainLayout'


const CreateRouter = () => {

    const router = createBrowserRouter([
        {
            path: `${import.meta.env.VITE_SITE_URL}`,
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
    ]);

    return (
        <RouterProvider router={router} />
    )
}

const Router = () => <CreateRouter />
export default Router
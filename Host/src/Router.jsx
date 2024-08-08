import { useMemo, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//  Components 
import MainLayout from './layout/MainLayout';
import Home from './Home/Home';
import NotFound from './not-found';

// Service
// import env from '../../Remote1/src/service/env';

// Remote Apps
const Remote1 = lazy(() => import('Remote1/Remote1'))


const CreateRouter = () => {

    const router = useMemo(() => createBrowserRouter([
        {
            element: <PrivateRoute Component={MainLayout} />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: "App",
                    children: [
                        {
                            path: "Remote1",
                            element: <Remote1 />
                        }
                    ]
                },
                {
                    path: "*",
                    element: <NotFound />,
                },
            ],
        }

    ]), [])


    return (
        <RouterProvider router={router} />
    )
}

const Router = () => <CreateRouter />
export default Router


const PrivateRoute = ({ Component }) => {
    return (<Component />)
}
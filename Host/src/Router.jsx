import { useMemo, lazy } from 'react';
import { createBrowserRouter, isRouteErrorResponse, RouterProvider, useRouteError } from 'react-router-dom';

//  Components 
import MainLayout from './layout/MainLayout';
import Home from './Home/Home';
import NotFound from './not-found';

// Remote Apps
const Rework = lazy(() => import('Rework/Rework'))


const CreateRouter = () => {

    const router = useMemo(() => createBrowserRouter(
        [
            {
                element: <PrivateRoute Component={MainLayout} />,
                errorElement: <ErrorRoute />,
                children: [
                    {
                        index: true,
                        element: <Home />
                    },
                    {
                        path: "App",
                        children: [
                            {
                                path: "Rework",
                                element: <Rework />
                            }
                        ]
                    },
                    {
                        path: "*",
                        element: <NotFound />,
                    },
                ],
            }
        ],
        {
            basename: "/"
        }
    ), [])


    return (
        <RouterProvider router={router} />
    )
}

const Router = () => <CreateRouter />
export default Router


const PrivateRoute = ({ Component }) => {
    return (<Component />)
}


const ErrorRoute = () => {
    const error = useRouteError();
    console.error("Error Route : ", error)

    if (isRouteErrorResponse(error)) {
        return (
            <div>
                <h1>Oops!</h1>
                <h2>{error.status}</h2>
                <p>{error.statusText}</p>
                {error.data?.message && <p>{error.data.message}</p>}
            </div>
        );
    } else {
        return <div>Oops</div>;
    }
}
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Errorpage from "../components/Errorpage";
import Home from "../Pages/Home";
import Coffees from "../Pages/Coffees";
import Dashboard from "../Pages/Dashboard";
import CoffeeCards from "../components/CoffeeCards";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('../categories.json'),
                children: [
                    {
                        path: '/',
                        element: <CoffeeCards></CoffeeCards>,
                        loader: () => fetch('../coffees.json'),
                    },
                    {
                        path: '/category/:category',
                        element: <CoffeeCards></CoffeeCards>,
                        loader: () => fetch('../coffees.json'),
                    },

                ],
            },
            {
                path: '/coffees',
                element: <Coffees></Coffees>,
                loader: () => fetch('../coffees.json'),
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
            },
        ]
    },
])

export default routes;
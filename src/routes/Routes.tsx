import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import GameDetailsPage from "../pages/GameDetailsPage";
import Homepage from "../pages/Homepage";
import Layout from "../pages/Layout";

const router =  createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement:  <ErrorPage/>,
        children:[
            {
                index: true ,
                element: <Homepage/>
            
            },
            {
                path: "game/:id",
                element: <GameDetailsPage/>
            }
        ]
       
    }

])


export default router ;
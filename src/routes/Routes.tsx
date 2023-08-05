import { createBrowserRouter } from "react-router-dom";
import GameDetailsPage from "../pages/GameDetailsPage";
import Homepage from "../pages/Homepage";
import Layout from "../pages/Layout";

const router =  createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
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
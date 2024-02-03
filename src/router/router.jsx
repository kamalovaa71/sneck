import Root from "../pages/Root";
import HomePage from "../pages/HomePage";
import { createBrowserRouter } from "react-router-dom";
import Profile from "../pages/ProfilePage";
import Favorite from "../pages/FavoritePage";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children:[
            {
                path: "/",
                element: <HomePage/> 
            },
            {
                path: "/profile",
                element: <Profile/>
            },
            {
                path: "/favorite",
                element: <Favorite/>
            },
        ]
    },
]);

export default router;
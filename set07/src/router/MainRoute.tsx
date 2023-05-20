import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Block/Layout";
// import { Children } from "react";
import Landingpage from "../pages/Landingpage";
import Save from "../pages/Save";
import Invest from "../pages/Invest";
import Stories from "../pages/Stories";
import FAQs from "../pages/FAQs";
import Resources from "../pages/Resources";

export const MainRoute = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<Landingpage/>
            },
            {
                path:"Save",
                element:<Save/>
            },
            {
                path:"Invest",
                element:<Invest/>
            },
            {
                path:"stories",
                element:<Stories/>
            },
            {
                path:"Faqs",
                element:<FAQs/>
            },
            {
                path:"resources",
                element:<Resources/>
            },
        ]
    }
])
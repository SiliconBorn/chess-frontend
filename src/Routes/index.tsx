import { Navigate, useRoutes } from "react-router-dom"
import Landing from "../Components/Landing"
import Login from "../Components/Login-Register/Login"
import Signup from "../Components/Login-Register/Signup"



const Router =({isLoggedIn})=>{

    return useRoutes([
        {
            path:"/",
            element: <Landing/>,
        },
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/signup",
            element:<Signup/>
        },
    ])
}



export default Router
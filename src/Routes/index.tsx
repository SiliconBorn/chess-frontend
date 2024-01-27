import { Navigate, Outlet, useRoutes } from "react-router-dom"
import Login from "../Components/Login-Register/Login"
import Signup from "../Components/Login-Register/Signup"
import Game from "../components/Game"



const Router =({isLoggedIn}:{isLoggedIn:boolean})=>{

    return useRoutes([
        {
            path:"/",
            element:isLoggedIn?<Game/>: <Navigate to="/login"/>,
            children:[
                {path:"",element:<Navigate to="/Game"/>},
                {
                    path:"Game",
                    element:<Outlet/>,
                    children:[
                        {path:"",element:<Game/>}
                    ]
                }
                
            ]
        },
        {
            path:"/",
            element:!isLoggedIn ? <Login/> : <Navigate to="Game"/>,
            children:[
                { path: "", element: <Navigate to="/login" /> },
                { path: "login", element: <Login /> },
                { path: "signup", element: <Signup /> },

            ]
        }
    ])
}



export default Router
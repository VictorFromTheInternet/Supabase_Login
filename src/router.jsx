import {createBrowserRouter} from "react-router-dom"
import App from './App'
import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn"
import Dashboard from "./components/Dashboard"
import PrivateRoute from "./components/PrivateRoute"
import ErrorPage from "./components/ErrorPage"

export const router = createBrowserRouter([
    {path: "/", element: <App/>, errorElement: <ErrorPage/>},
    {path: "/signin", element: <SignIn/>, errorElement: <ErrorPage/>},
    {path: "/signup", element: <SignUp/>, errorElement: <ErrorPage/>},
    {path: "/dashboard", element: <PrivateRoute> <Dashboard/> </PrivateRoute> , errorElement: <ErrorPage/> }
])
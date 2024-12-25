import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import FindTutors from "../Pages/FindTutors";
import AddTutorials from "../Pages/AddTutorials";
import MyTutorials from "../Pages/MyTutorials";
import MyBookedTutors from "../Pages/MyBookedTutors";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Details from "../Pages/Details";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UpdateTutorial from "../Pages/UpdateTutorial";
import ErrorPage from "../Pages/ErrorPage";

const Router =createBrowserRouter([
    
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"findTutors/:language",
                element:<FindTutors></FindTutors>
            },
            {
                path:"details/:id",
                element:<PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({params})=>fetch(`${import.meta.env.VITE_apiUrl}tutorials/${params.id}`)
            },
            {
                path:"addTutorials",
                element:<PrivateRoute><AddTutorials></AddTutorials></PrivateRoute>
            },
            {
                path:"myTutorials",
                element:<PrivateRoute><MyTutorials></MyTutorials></PrivateRoute>
            },
            {
                path:"myBookedTutors",
                element:<PrivateRoute><MyBookedTutors></MyBookedTutors></PrivateRoute>
            },
            {
                path:"login",
                element:<Login></Login>
            },
            {
                path:"register",
                element:<Register></Register>
            },
            {
                path:'update/:id',
                element:<UpdateTutorial></UpdateTutorial>,
                loader:({params})=> fetch(`${import.meta.env.VITE_apiUrl}tutorials/${params.id}`)
            },
        ]
    }

])
  

export default Router;
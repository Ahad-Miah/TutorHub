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

const Router =createBrowserRouter([
    
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"findTutors/:category",
                element:<FindTutors></FindTutors>
            },
            {
                path:"details",
                element:<PrivateRoute><Details></Details></PrivateRoute>
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
            }
        ]
    }

])
  

export default Router;
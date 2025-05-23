import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayOuts from './LayOuts/MainLayOuts.jsx';
import Home from './Components/Home.jsx';
import AddCoffee from './Components/AddCoffee.jsx';
import UpgradeCoffee from './Components/UpgradeCoffee.jsx';
import CoffeeDetails from './Components/CoffeeDetails.jsx';
import AuthProvider from './Firease/AuthProvider.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayOuts,
    children: [
      {
        index: true,
        loader: () => fetch('http://localhost:3000/coffees'),
        element: <Home></Home>,
      },
      {
        path: "/addcoffee",
        element: <AddCoffee></AddCoffee>
      },
      {
        path: "/upgradecoffee/:id",
        loader: ({ params }) => fetch(`http://localhost:3000/coffees/${params.id}`),
        element: <UpgradeCoffee></UpgradeCoffee>
      },
      {
        path: "/coffeedetails/:id",
        loader: ({ params }) => fetch(`http://localhost:3000/coffees/${params.id}`),
        element: <CoffeeDetails></CoffeeDetails>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
  </StrictMode>,
)

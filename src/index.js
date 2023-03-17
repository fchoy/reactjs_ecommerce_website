import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Login from './Pages/Login'
import Product from './Pages/Product'
import ProductList from './Pages/ProductList'
import Register from './Pages/Register'
import ShoppingCart from './Pages/ShoppingCart'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/shoppingcart",
    element: <ShoppingCart/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


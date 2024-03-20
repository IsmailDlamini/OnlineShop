import React from "react";
import ReactDOM from "react-dom/client";
import App from "../../src/App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductView from "../../src/pages/ProductView.jsx";
import Search from "../../src/pages/Search.jsx";
import Cart from "../../src/pages/Cart.jsx";
import Login from "../../src/pages/Login.jsx";
import SignUp from "../../src/pages/SignUp.jsx";
import store from "../../src/Redux/store.js";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/product/:id",
    element: <ProductView />,
  },
  {
    path: "/Search/:searchTerm",
    element: <Search />,
  },
  {
    path: "/Cart/:id",
    element: <Cart />,
  },
  {
    path: "/Cart",
    element: <Cart />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/SignUp",
    element: <SignUp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// Read about React Router DOM

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => (
  <div className="app">
    <Header />
    {/* An outlet for matching children */}
    <Outlet />
    <Footer />
  </div>
);

// Router Configuration using createBrowserRouter
// Also handling error
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    // This errorElement acts like the last catch block in try-catch
    // Error could be component not exported or syntax or logical error
    errorElement: <Error />,
  },
]);

// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);

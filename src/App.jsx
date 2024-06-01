import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import store from "./utils/Store";
import Shimmer from "./components/Shimmer";

const About = lazy(()=>import( "./components/About"));
const Cart = lazy(()=>import("./components/Cart"));

const App = () => (
  <Provider store={store}>
    <Header />
    <Outlet />
    <Footer />
  </Provider>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element:<Suspense fallback={<h1>Loading.....</h1>}>
          <About />
        </Suspense> ,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path:"/cart",
        element:<Suspense fallback={<Shimmer/>}>
          <Cart/>
        </Suspense>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

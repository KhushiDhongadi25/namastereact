// --------HERE WE GO-------FOOD ORDERING APP--------------
/***
 * HEADER
 *   -LOGO{Title}
 *   -Nav items{Right side}
 *   -cart
 * BODY
 *    -Search bar
 *    -resturantlist
 *       -restuarantcard {many cards}
 *             -image
 *             -name
 *             -rating
 *             -cuisine
 * FOOTER
 *   -links
 *   -copyright
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import Error from './components/Error';
// import Profile from './components/Profile';
// import Profile from './components/ProfileClass';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import RestuarantMenu from './components/RestuarantMenu';



const root = ReactDOM.createRoot(document.getElementById('root'));

const AppLayout = () => {
 return (
 <>
 <Header />
 <Outlet />
 <Footer />
 </>
 );
};

const appRouter = createBrowserRouter ([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
            path: "/",
            element: <Body />
        },
        {
            path: "/about",
            element: <About />,
            // children: [
            //   {
            //     path: "profile", //parentPath/{path} => localhost:/about/profile
            //     element: <Profile />
            //   },
            // ],
        },
        {
            path: "/contact",
            element: <Contact />
        },
        {
            path: "/restuarant/:id",
            element: <RestuarantMenu />
        },
      ]
    },
  ])

root.render(<RouterProvider router = {appRouter} />);




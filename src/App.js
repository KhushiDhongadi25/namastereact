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

import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Contact from './components/Contact';
// import About from './components/About';
import Error from './components/Error';
import Shimmer from './components/shimmer';
// import Instamart from './components/Instamart';
// import Profile from './components/Profile';
// import Profile from './components/ProfileClass';
import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import RestuarantMenu from './components/RestuarantMenu';
import UserContext from './utils/UserContext';


// chunking
// code splitting
// dynamic bundling
// lazy loading
// on demand loading
// dynamic import

const About = lazy(() => import("./components/About"));
const Instamart = lazy(() => import("./components/Instamart"));

const root = ReactDOM.createRoot(document.getElementById('root'));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Khushi",
    email: "khushidhongadi25@gmail.com",
  });

 return (
  <>
 <UserContext.Provider value={{user: user,}}>
 <Header />
 <Outlet />
 <Footer />
 </UserContext.Provider>
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
            element: <Suspense fallback={<h1>loading, please wait...</h1>}><About /></Suspense>,
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
        {
          path: "/instamart",
          element: <Suspense fallback={<Shimmer />}><Instamart /></Suspense>
      },
      ]
    },
  ])

root.render(<RouterProvider router = {appRouter} />);




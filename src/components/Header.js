import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Title = () => (
  <a href="/">
    <img
      className="h-20 p-2"
      alt="logo"
      src="http://shaggysthefoodvillas.com/wp-content/uploads/2023/07/Logo-fotor-2023072522738.png"
    />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const isOnline = useOnline();

  const {user} = useContext(UserContext);

  return (
    <div className="flex justify-between bg-orange-500 shadow-lg sm:bg-blue-50 md:bg-yellow-50">
      <Title />
      <div className="nav-items">
        <ul className="flex py-6">
          <li className="px-2 font-bold text-black hover:underline hover:text-orange-500"><Link to="/">Home</Link></li>
          <li className="px-2 font-bold text-black hover:underline hover:text-orange-500"><Link to="/about">About</Link></li>
          <li className="px-2 font-bold text-black hover:underline hover:text-orange-500"><Link to="/contact">Contact</Link></li>
          <li className="px-2 font-bold text-black hover:underline hover:text-orange-500"><Link to="/">Cart</Link></li>
          <li className="px-2 font-bold text-black hover:underline hover:text-orange-500"><Link to="/instamart">Instamart</Link></li>
        </ul>
      </div>
      <h1 className="py-6 font-bold">{isOnline? "+OnlineMode" : "-OfflineMode"}</h1>
      <span className="p-18 font-bold text-red-600">{user.name}</span>
      {isLoggedIn ? (
        <button className="px-5 font-bold m-5 rounded-3xl shadow-lg bg-black text-white hover:bg-orange-500 hover:text-black" onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button className="px-5 font-bold m-5 rounded-3xl shadow-lg bg-black text-white hover:bg-orange-500 hover:text-black" onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;

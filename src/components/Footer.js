import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
    const {user} = useContext(UserContext);
    return <h4 className="p-10 m-10">This website is powered by {user.name} - {user.email} </h4>;
   };

export default Footer;
import { createContext } from "react";

const UserContext = createContext({
    user: {
    name: "dummy name",
    email: "dummygmail.com",
},
});

export default UserContext;
// import { Outlet } from "react-router-dom";
import ProfileFuncComp from "./Profile";
import Profile from "./ProfileClass";
import { Component } from "react";

// const About = () => {
//     return (
//         <div>
//             <h1>about us page</h1>
//             <p>this is namaste react live course</p>
//             <ProfileFuncComp name={"KHUSHI"}/>
//             <Profile name={"Khushiclass"}/>
//         </div>
//     );
// };

class About extends Component {

    constructor(props){
        super(props)
            console.log("parent - constructor");
    }

    componentDidMount() {
        // best place to make an API call
        console.log("parent - componentdidmount");
    }

    render() {
        console.log("parent - render");
        return(
            <div>
            <h1>about us page</h1>
            <p>this is namaste react live course</p>
            <ProfileFuncComp name={"KHUSHI"}/>
            <Profile name={"first class"}/>
            {/* <Profile name={"Second class"}/> */}
        </div>
        ) ;
    }
}

export default About;
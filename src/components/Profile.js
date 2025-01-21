import { useEffect, useState } from 'react';

const Profile = (props) => {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        // Api call
        // console.log("useEffect");
        const timer = setInterval(() => {
            console.log("namaste react op")
        }, 1800);
        console.log("useEffect");
        
        return() =>{
            clearInterval(timer);
            console.log("useEffect Return");
        }
    }); 
    console.log("render"); 
    return (
        <div>
            <h2>Profile component</h2>
            <h3>name: {props.name}</h3>
            <h3>count: {count} </h3>
            <button onClick={() => setCount(1)}>count</button>
        </div>
    );
};

export default Profile;
import {IMG_CDN_URL} from '../config';
import { useContext } from 'react';
import UserContext from '../utils/UserContext';

// const RestuarantCard = ({restuarant}) => {
    const RestuarantCard = ({name, cuisines,cloudinaryImageId, areaName, avgRating}) => {
        const { user } = useContext(UserContext); 

        // const{name, cuisines,cloudinaryImageId, areaName, avgRating} = restuarant.info;
         return (
         <div className='w-56 p-2 m-5 shadow-lg rounded-lg bg-gray-100 hover:shadow-slate-400'>
         <img src={IMG_CDN_URL + cloudinaryImageId}/>
         <h2 className='font-bold text-xl'>{name}</h2>
         <h3>{cuisines.join(", ")}</h3>
         <h5>{areaName}</h5>
         <h5>{avgRating} stars</h5>
         <h5>{user.name} - 
            {user.email}</h5>
         </div>
         );
        };

export default RestuarantCard;
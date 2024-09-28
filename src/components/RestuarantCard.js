import {IMG_CDN_URL} from '../config';

// const RestuarantCard = ({restuarant}) => {
    const RestuarantCard = ({name, cuisines,cloudinaryImageId, areaName, avgRating}) => {

        // const{name, cuisines,cloudinaryImageId, areaName, avgRating} = restuarant.info;
         return (
         <div className='card'>
         <img src={IMG_CDN_URL + cloudinaryImageId}/>
         <h2>{name}</h2>
         <h3>{cuisines.join(", ")}</h3>
         <h5>{areaName}</h5>
         <h5>{avgRating} stars</h5>
         </div>
         );
        };

export default RestuarantCard;
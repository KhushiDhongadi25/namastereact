import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./shimmer";
import useRestuarant from "../utils/useRestuarant";

const RestuarantMenu = () => {
    // const params = useParams(); 
    // destructuring on the fly
    const { id } = useParams(); 
    // const { id } = params;
    // console.log(params);
    // const [restuarant, setRestuarant] = useState(null);

    const restuarant = useRestuarant(id);

    return (!restuarant) ? <Shimmer /> : (
        <div className="p-3">
            <div className="mx-56">
            {/* <h1>Restuarant id: {id}</h1> */}
            <h2 className="bg-orange-400 font-bold">{"--> RestuarantId: "+ restuarant?.id}</h2>
            <img className="w-60 m-3 p-1.5 rounded-3xl bg-gray-300" src={IMG_CDN_URL + restuarant?.cloudinaryImageId } />
            <h3 className="bg-orange-400 font-bold">{"• Area Name: "+restuarant?.areaName}</h3>
            <h3 className="bg-orange-400 font-bold">{"• City Name: "+restuarant?.city}</h3>
            <h3 className="bg-orange-400 font-bold">{"• Average Rating: "+restuarant?.avgRating} stars</h3>
            <h3 className="bg-orange-400 font-bold">{"• Price for Two: "+restuarant?.costForTwo}/2</h3>
            </div>
            {/* <div>
                <h1>Menu</h1>
                <ul>
                {Object.values(restuarant?.menu?.items).map((item)=> (
                    <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </div> */}
        </div>
    );
};

export default RestuarantMenu;
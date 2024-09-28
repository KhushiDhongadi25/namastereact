import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./shimmer";

const RestuarantMenu = () => {
    // const params = useParams(); 
    // destructuring on the fly
    const { id } = useParams(); 
    // const { id } = params;
    // console.log(params);
    const [restuarant, setRestuarant] = useState(null);

    useEffect(() => {
        getRestuarantInfo();
    }, []);

    async function getRestuarantInfo() {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9199543&lng=77.6256895&catalog_qa=undefined&submitAction=ENTER&restaurantId="+ id
        );
        const json =await data.json();
        console.log(json.data.cards[2].card.card.info);
        setRestuarant(json.data.cards[2].card.card.info);
    }

    return (!restuarant) ? <Shimmer /> : (
        <div>
            <div>
            {/* <h1>Restuarant id: {id}</h1> */}
            <h2>{"RestuarantId: "+ restuarant?.id}</h2>
            <img className="menuImg" src={IMG_CDN_URL + restuarant?.cloudinaryImageId } />
            <h3>{"Area Name: "+restuarant?.areaName}</h3>
            <h3>{"City Name: "+restuarant?.city}</h3>
            <h3>{"Average Rating: "+restuarant?.avgRating} stars</h3>
            <h3>{"Price for Two: "+restuarant?.costForTwo}</h3>
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
import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../config";

const useRestuarant = (id) => {
    const [restuarant, setRestuarant] = useState(null);

    // get data from API
    useEffect(() => {
        getRestuarantInfo();
    }, []);

    async function getRestuarantInfo() {
        const data = await fetch( FETCH_MENU_URL + id);
        const json = await data.json();
        console.log(json.data.cards[2].card.card.info);
        setRestuarant(json.data.cards[2].card.card.info);
    }


    // return restuarant Data
    return restuarant;
};

export default useRestuarant;
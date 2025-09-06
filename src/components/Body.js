import { restuarantList } from "../config";
import RestuarantCard from "./RestuarantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import {Link} from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

// what is state
// what is react hooks? - functions
// what is useState


const Body = () => {
  // create variables in js
  //   const searchText = "KFC";

  // create local variables using react
  const [allRestuarants, setAllRestuarants] = useState([]);
  const [filteredRestuarants, setFilteredRestuarants] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  // console.log("render1");

  useEffect(() => {
    // console.log("render2");
    getRestuarants();
  }, []);

  async function getRestuarants(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9199543&lng=77.6256895&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    // console.log(json);
    // console.log("render3");
    setAllRestuarants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestuarants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  const isOnline = useOnline();

  if (!isOnline){
    return <h1> OFFLINE, PLEASE CHECK YOUR INTERNET CONNECTION..</h1>;
  }

  // console.log("render4");

  // conditional rendering
  // if restuarant is empty => shimmer UI
  // if restuarant has data =>actual data UI


// this is the restuarants which will be shown in the UI - filteredRestuarants
// and the filtering of the restuarants will be done using - allRestuaranrs

// if(filteredRestuarants?.length == 0)
//   return <h1>No restuarants match your Filter</h1>

  return filteredRestuarants.length == 0 ? ( 
    <Shimmer/> 
  ) : (
    <>
      <div className="search-container p-3 shadow-lg bg-orange-500 my-2">
        <input
          type="text"
          className="focus:bg-search-input p-1.5 shadow-lg rounded-2xl pr-52 ml-96"
          placeholder=" search here"
          value={searchInput}
          onChange={(e) => {
            // e.target.value => whatever you write in input
            setSearchInput(e.target.value);
          }}
        />
        <button className="p-2 px-5 m-1 font-bold bg-red-600 hover:bg-red-500 text-white rounded-full shadow-lg"
          onClick={() => {
            // need to filter the data
            const data = filterData(searchInput, allRestuarants);
            // update the state  - restuarants
            setFilteredRestuarants(data);
          }
          }>Search</button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestuarants.map((restuarant) => {
          return (
            <Link to={"/restuarant/" + restuarant.info.id} key={restuarant.info.id}><RestuarantCard {...restuarant.info}/></Link>
          );
        })}
        {/* <RestuarantCard {...restuarantList[0].info}/>
       <RestuarantCard {...restuarantList[1].info}/>
       <RestuarantCard {...restuarantList[2].info}/>
       <RestuarantCard {...restuarantList[3].info}/>
       <RestuarantCard {...restuarantList[4].info}/>
       <RestuarantCard {...restuarantList[5].info}/>
       <RestuarantCard {...restuarantList[6].info}/>
       <RestuarantCard {...restuarantList[7].info}/>
       <RestuarantCard {...restuarantList[8].info}/>
       <RestuarantCard {...restuarantList[9].info}/> */}
        {/* <RestuarantCard restuarant = {restuarantList[0]}/>
       <RestuarantCard restuarant = {restuarantList[1]}/>
       <RestuarantCard restuarant = {restuarantList[2]}/>
       <RestuarantCard restuarant = {restuarantList[3]}/>
       <RestuarantCard restuarant = {restuarantList[4]}/>
       <RestuarantCard restuarant = {restuarantList[5]}/>
       <RestuarantCard restuarant = {restuarantList[6]}/>
       <RestuarantCard restuarant = {restuarantList[7]}/>
       <RestuarantCard restuarant = {restuarantList[8]}/>
       <RestuarantCard restuarant = {restuarantList[9]}/> */}
      </div>
    </>
  );
};

export default Body;

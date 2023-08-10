import RestaurantCard from "./RestaurantCard";
import { useState } from "react"; /* This is named export */
import Shimmer from "./Shimmer1"; /* This is default export */
import { swiggy_api_URL } from "../contants";
import { Link } from "react-router-dom";
import { filterData } from '../Utils/Helper' ; // For reusability or readability filterData function is added in Helper.js file of Utils folder
import useResData from "../Hooks/useResData"; // imported custom hook useResData which gives All Restaurant and  Filtered Restaurant data from swigy api
import useOnline from "../Hooks/useOnline"; // imported custom hook useOnline which checks user is online or not
import UserOffline from "./UserOffline";

// Body Component for body section: It contain all restaurant cards
const Body = () => {
  // useState: To create a state variable, searchText, allRestaurants and filteredRestaurants is local state variable
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [allRestaurants, FilterRes] = useResData(swiggy_api_URL);
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);
  const isOnline = useOnline();
  // if user is not Online then return UserOffline component
  if (!isOnline) {
    return <UserOffline />
  }

  // use searchData function and set condition if data is empty show error message
  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const filteredData = filterData(searchText, restaurants);
      setFilteredRestaurants(filteredData);
      setErrorMessage("");
      if (filteredData?.length === 0) {
        setErrorMessage(
          `Sorry, we couldn't find any results for "${searchText}"`
        );
      }
    } else {
      setErrorMessage("");
      setFilteredRestaurants(restaurants);
    }
  };

  // if allRestaurants are empty don't render restaurants cards
  if (!allRestaurants) return null;

  return (
    <>
       <div className="mx-8 ">
       <div className="flex flex-col justify-between items-center md:flex md:flex-row">
      <div className="text-sm flex gap-2 my-4">
        <input
          type="text"
          placeholder="Search for a restaurants"
          className="w-64 text-xs border border-gray-300 focus:border-gray-500 transition-all duration-300 px-2 py-2 outline-none  rounded"
          value={searchText}
          onChange={(e)=>{
            setSearchText(e.target.value)
            const fData = filterData(searchText,allRestaurants)
           setFilteredRestaurents(fData)
        }}
        />
        <button className="text-xs font-medium shadow-md px-2 py-2 outline-none  rounded bg-orange-500 hover:bg-orange-600 transition-all duration-200 ease-in-out text-white"
        onClick={()=>{
           const fData = filterData(searchText,allRestaurants)
           console.log(fData)
           setFilteredRestaurents(fData)
        }}
        >
          Search
        </button>
      </div>
        <div className="flex gap-12 cursor-pointer text-xs">
            <div className="flex gap-4 items-center">
            <img className="h-6" alt="illustration" src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp" loading="lazy" />
                <span className="">Delivery</span>
            </div>
            <div className="flex gap-4 items-center">
            <img className="h-6" alt="illustration" src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png?output-format=webp" loading="lazy" />
                <span className="whitespace-nowrap">Dining Out</span>
            </div>
            <div className="flex gap-4 items-center">
            <img className="h-6" alt="illustration" src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png?output-format=webp" loading="lazy" />
                <span className="">Nightlife</span>
            </div>
        </div>
        </div>
      {errorMessage && <div className="error-container">{errorMessage}</div>}

      {/* if restaurants data are fetched then display restaurants cards otherwise display Shimmer UI */}
      {allRestaurants?.length === 0 && FilterRes?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-list">
          {/* We are mapping restaurants array and passing JSON array data to RestaurantCard component as props with unique key as restaurant.data.id */}
          {(filteredRestaurants === null ? FilterRes : filteredRestaurants).map(
            (restaurant) => {
              return (
                <Link
                  to={"/restaurant/" + restaurant?.info?.id}
                  key={restaurant?.info?.id}
                >
                  {/* if we click on any restaurant card it will redirect to that restaurant menu page */}
                  <RestaurantCard {...restaurant?.info} />
                </Link>
              );
            }
          )}
        </div>
      )}
      </div>
    </>
  );
};

export default Body;
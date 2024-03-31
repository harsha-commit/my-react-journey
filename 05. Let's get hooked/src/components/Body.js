import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

/* 
  Hooks - React Utility functions

  Mostly used hooks:
    useState() to create state variables
    useEffect()

  Whenever a state variable changes, react re-renders a component
*/

const Body = () => {
  // Local State Variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="top-rated-btn"
          onClick={() => {
            // listOfRestaurants = listOfRestaurants.filter(
            //   (res) => res.info.avgRating > 4.0
            // );

            setListOfRestaurants(
              listOfRestaurants.filter((res) => res.info.avgRating >= 4.5)
            );
            console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="reset">
        <button
          className="reset-btn"
          onClick={() => {
            setListOfRestaurants(resList);
          }}
        >
          Reset
        </button>
      </div>
      <div className="container">
        {
          // Observe that an array of JSX elements are rendered sequentially
          listOfRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))
        }
      </div>
    </div>
  );
};

export default Body;

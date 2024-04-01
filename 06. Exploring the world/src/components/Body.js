import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

/*
  Approach 1: Page loads -> API Call -> Render with data
  Approach 2: Page loads -> Render the page -> API Call -> Re-render with data

  Approach 2 is better UX
  React render cycles are very fast
*/

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(null);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    // fetch() is function provided by the browser
    // fetch() returns a promise

    // When two origin mismatch - browsers block the call (CORS)
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4681217&lng=78.2333657&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // Optional Chaining
    const resList =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    console.log(resList);
    setListOfRestaurants(resList ? resList : []);
    setFilteredRestaurants(resList ? resList : []);
  };

  // The callback function is called after the component is rendered
  // i.e, just after render cycle of the component is completed
  useEffect(() => {
    console.log("useEffect() called");
    fetchData();
  }, []);

  // CONDITIONAL RENDERING
  return filteredRestaurants === null ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search for any restaurant in your locality ..."
            // TWO WAY BINDING

            onChange={async (e) => {
              // Update the search box
              setSearchText(e.target.value);
              console.log(e.target.value + " " + searchText);

              // Filter for every keystroke
              // Using e.target.value.toLowerCase() instead of searchText.toLowerCase() works
              if (e.target.value === "") {
                setFilteredRestaurants(listOfRestaurants);
              } else {
                setFilteredRestaurants(
                  listOfRestaurants?.filter((res) => {
                    return res.info.name
                      .toLowerCase()
                      .includes(e.target.value.toLowerCase());
                  })
                );
              }
            }}
            value={searchText}
          />
        </div>
        <button
          className="top-rated-btn"
          onClick={() => {
            // Filter from original list
            setFilteredRestaurants(
              listOfRestaurants?.filter((res) => res.info.avgRating >= 4.0)
            );
            console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="container">
        {filteredRestaurants?.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

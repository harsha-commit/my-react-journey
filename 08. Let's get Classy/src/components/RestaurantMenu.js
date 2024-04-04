import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

// Reusable Component
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card
      .itemCards;
  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h4>
        {cuisines.join(" ")} - {costForTwoMessage}
      </h4>
      <ul>
        {itemCards.map((itemCard) => (
          <li key={itemCard.card.info.id}>
            {itemCard.card.info.name} - Rs.{" "}
            {(itemCard.card.info.defaultPrice || itemCard.card.info.price) /
              100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

// Named Imports
import { IMAGE_CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cloudinaryImageId,
    locality,
    areaName,
    costForTwo,
    cuisines,
    avgRating,
    totalRatingsString,
    sla: { deliveryTime },
    isOpen,
    veg,
  } = resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "lightgrey" }}>
      <div className="res-image">
        <img src={IMAGE_CDN_URL + cloudinaryImageId} />
      </div>
      <div className="res-details">
        <div>
          <h3>{name}</h3>
        </div>
        <div>{locality}</div>
        <div>{areaName}</div>
        <div>{costForTwo}</div>
        <div>{cuisines.join(", ")}</div>
      </div>
      <div className="res-analytics">
        <div>{avgRating} *</div>
        <div>{totalRatingsString}</div>
        <div>{deliveryTime} min</div>
      </div>
    </div>
  );
};

export default RestaurantCard;

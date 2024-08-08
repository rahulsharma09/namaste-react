const RestaurantCard = ({restaurantName, cuisine, rating, deliveryTime}) => {
    return (
      <div className="res_card">
        <img
          src="https://b.zmtcdn.com/data/pictures/8/47978/66acbe4e1432a24e3565dce957dcbaa0_featured_v2.jpg?output-format=webp"
          alt="restaurant name"
        />
        <h3>{restaurantName}</h3>
        <h4>{cuisine}</h4>
        <h4>{rating}</h4>
        <h4>{deliveryTime}</h4>
      </div>
    );
  };

  export default RestaurantCard;
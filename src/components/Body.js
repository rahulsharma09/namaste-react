import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/resList";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const swiggyData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2457714&lng=72.9800115&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await swiggyData.json();
    console.log(
      json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setTimeout(() => {
      setProducts(
        json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    }, 3000);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="body">
      <div className="filter">
        <div>
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              if (searchText.length == 0) {
                setFilteredProducts([]);
              }
            }}
          />
          <button
            style={{
              marginLeft: "20px",
            }}
            onClick={() => {
              console.log(searchText);
              const filteredProducts = products.filter((elem) =>
                elem.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log(filteredProducts);
              setFilteredProducts(filteredProducts);
            }}
          >
            Search
          </button>{" "}
          <br />
        </div>
        <button
          onClick={() => {
            const filteredProducts = products.filter(
              (prod) => prod.rating.rate > 4
            );
            setProducts(filteredProducts);
          }}
        >
          Filter
        </button>
      </div>
      {products.length == 0 ? (
        <div>
          <Shimmer />
        </div>
      ) : (
        <div className="restaurants">
          {filteredProducts.length > 0
            ? filteredProducts.map((single, index) => (
                <ProductCard key={single.info.id} data={single} />
              ))
            : products.map((single, index) => (
                <ProductCard key={single.info.id} data={single} />
              ))}
        </div>
      )}
    </div>
  );
};

export default Body;

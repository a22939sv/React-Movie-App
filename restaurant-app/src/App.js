import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import RestaurantList from "./components/RestaurantList";
import RestaurantListHeading from "./components/RestaurantListHeading";
import RestaurantFilter from "./components/RestaurantFilter";
import Header from "./components/Header";

const App = () => {
  const imgEstablecimientos =
    "https://res.cloudinary.com/glovoapp/w_48,h_48,f_auto,q_auto:best/CX/new_backend_driven_home_screen/newUserRecommendationsWidgetIconLight";
  const imgEstablecimientosStar =
    "https://res.cloudinary.com/glovoapp/w_48,h_48,f_auto,q_auto:best/CX/new_backend_driven_home_screen/bestInCityLight";
  const [restaurants, setRestaurants] = useState([{}]);
  const [restaurantsScore, setRestaurantsScore] = useState([{}]);
  const [searchValue, setSearchValue] = useState("");

  const getRestaurantsRequest = async (searchValue) => {
    var url = "";
    if (searchValue !== "") {
      url = `/api/v1/restaurant/name/${searchValue}`;
    } else {
      url = `/api/v1/restaurant`;
    }

    const response = await fetch(url);

    const responseJson = await response.json();

    if (responseJson.data) {
      setRestaurants(responseJson.data);
    }
  };

  const getRestaurantsScoreRequest = async () => {
    const url = `/api/v1/restaurant/star`;

    const response = await fetch(url);

    const responseJson = await response.json();

    if (responseJson.data) {
      setRestaurantsScore(responseJson.data);
    }
  };

  useEffect(() => {
    getRestaurantsRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    getRestaurantsScoreRequest();
  }, []);

  return (
    <div className="container-fluid restaurant-app">
      <div className="row header">
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row ms-5 me-5">
        <div className="row ms-1 mt-2 filter">
          <div className="row mt-2 me-3">
            <RestaurantFilter />
          </div>
        </div>
        <div className="row mt-2 me-3">
          <RestaurantListHeading
            heading="Establecimientos que te pueden gustar"
            img={imgEstablecimientos}
          />
        </div>
        <div className="row d-flex mt-4 ms-1 me-1 mb-4 restaurants-list">
          <RestaurantList restaurants={restaurants} />
        </div>
        <div className="row mt-4 me-3">
          <RestaurantListHeading
            heading="Lo mejor valorado"
            img={imgEstablecimientosStar}
          />
        </div>
        <div className="row d-flex mt-4 ms-1 me-1 mb-4 restaurants-list">
          <RestaurantList restaurants={restaurantsScore} />
        </div>
      </div>
    </div>
  );
};

export default App;

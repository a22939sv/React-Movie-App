import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RestaurantList from "./components/RestaurantList";
import RestaurantListHeading from "./components/RestaurantListHeading";
import SearchBox from "./components/SearchBox";
import LogoBox from "./components/LogoBox";
import StartBox from "./components/StartBox";
import RestaurantFilter from "./components/RestaurantFilter";

const App = () => {
  const [restaurants, setRestaurants] = useState([{}]);
  const [restaurantsScore, setRestaurantsScore] = useState([{}]);
  const [searchValue, setSearchValue] = useState("")

  const getRestaurantsRequest = async () => {
    const url = `/api/v1/restaurant`;

    const response = await fetch(url);

    const responseJson = await response.json();

    if (responseJson.data) {
      setRestaurants(responseJson.data);
    }
  }

  const getRestaurantsScoreRequest = async () => {
    const url = `/api/v1/restaurant/score`;

    const response = await fetch(url);

    const responseJson = await response.json();

    if (responseJson.data) {
      setRestaurantsScore(responseJson.data);
    }
  }

  useEffect(() => {
    getRestaurantsRequest();
  }, []);

  return (
    <div className="container-fluid restaurant-app">
      <div className="row header">
        <LogoBox />
        <SearchBox />
        <StartBox />
      </div>
      <div className="row me-3 mt-2 filter">
        <RestaurantFilter />
      </div>
      <div className="row mt-2">
        <RestaurantListHeading heading="Establecimientos" />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4 restaurants-list">
        <RestaurantList restaurants={restaurants} />
      </div>
      <div className="row mt-4">
        <RestaurantListHeading heading="Establecimientos mejor valorados" />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4 restaurants-list"
        onLoad={getRestaurantsScoreRequest()}>
        <RestaurantList restaurants={restaurantsScore} />
      </div>
    </div>
  )
}

export default App;

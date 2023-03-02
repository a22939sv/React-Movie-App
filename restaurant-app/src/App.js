import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RestaurantList from "./components/RestaurantList";
import RestaurantListHeading from "./components/RestaurantListHeading";

const App = () => {
  const [restaurants, setRestaurants] = useState([{}]);

  const getRestaurantsRequest = async () => {
    const url = `/api/v1/restaurant`;

    const response = await fetch(url);

    const responseJson = await response.json();

    if (responseJson.data) {
      setRestaurants(responseJson.data);
    }
  }

  useEffect(() => {
    getRestaurantsRequest();
  }, []);

  return(
    <div className="container-fluid restaurant-app">
      <div className="row">
        <RestaurantListHeading heading="Establecimientos que te pueden gustar" />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4 restaurants-list">
        <RestaurantList restaurants={restaurants} />
      </div>
    </div>
  )
}

export default App;

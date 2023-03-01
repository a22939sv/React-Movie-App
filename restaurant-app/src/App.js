import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RestaurantList from "./components/RestaurantList";

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
    <div className="container-fluid">
      <div className="row">
        <h1 className="m-3">Establecimientos que te pueden gustar</h1>
      </div>
      <div className="row mt-3 restaurants-list">
        <RestaurantList restaurants={restaurants} />
      </div>
    </div>
  )
}

export default App;

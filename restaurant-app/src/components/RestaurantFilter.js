import React from "react";

const RestaurantFilter = (props) => {
  return (
    <div className="p-4 pb-0 mb-3">
      <h1 className="mb-4">Filtros</h1>
      <div className="pb-4 d-grid">
        <label>
          <h4>Categoria</h4>
        </label>
        <select className="categoryInput">
          <option></option>
          <option>Americana</option>
          <option>Supermercado</option>
          <option>Pizza</option>
          <option>Desayuno</option>
          <option>Árabe</option>
        </select>
        <label className="mt-3">
          <h4>Estrellas</h4>
        </label>
        <div className="">
          <input className="me-2 starInput" type="button" value="⭐"></input>
          <input className="me-2 starInput" type="button" value="⭐⭐"></input>
          <input className="me-2 starInput" type="button" value="⭐⭐⭐"></input>
          <input className="me-2 starInput" type="button" value="⭐⭐⭐⭐"></input>
          <input className="me-2 starInput" type="button" value="⭐⭐⭐⭐⭐"></input>
        </div>
      </div>
    </div>
  );
};

export default RestaurantFilter;

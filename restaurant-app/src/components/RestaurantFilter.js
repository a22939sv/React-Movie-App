import React from "react";

const RestaurantFilter = (props) => {
  return (
    <div className="form-control p-4 pb-3 mb-3">
      <h1 className="mb-4">Filtros</h1>
      <div className="pb-4 d-flex align-items-center justify-content-center">
        <label className="me-3">
          <h4>Categoria</h4>
        </label>
        <select className="form-control">
          <option>- Seleccione una categoria -</option>
          <option>Americana</option>
          <option>Supermercado</option>
          <option>Pizza</option>
          <option>Desayuno</option>
          <option>Árabe</option>
        </select>
        <label className="ms-3 me-3">
          <h4>Estrellas</h4>
        </label>
        <select className="form-control">
          <option>- Seleccione cuantas estrellas -</option>
          <option>⭐</option>
          <option>⭐⭐</option>
          <option>⭐⭐⭐</option>
          <option>⭐⭐⭐⭐</option>
          <option>⭐⭐⭐⭐⭐</option>
        </select>
      </div>
    </div>
  );
};

export default RestaurantFilter;

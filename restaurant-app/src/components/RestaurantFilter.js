import React from "react";

const RestaurantFilter = (props) => {
    return (
        <div className="form-control col-lg-4 col-md-3 col-sm-3 d-flex align-items-center justify-content-center m-3 p-3">
            <label className="me-3"><h3>Category</h3></label>
            <select className="form-control">
                <option>Americana</option>
                <option>Supermercado</option>
                <option>Pizza</option>
            </select>
        </div>
    )
}

export default RestaurantFilter;
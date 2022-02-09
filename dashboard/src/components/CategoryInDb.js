import React, { useState, useEffect } from "react";
import Category from "./Category";
import {httpProductService} from "../service/httpProductService";

function CategoryInDb() {
  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(async () => {
    try {
      const data = await httpProductService.getProducts()

      setCategoriesList(data)
      
    } catch (e) {}
  }, []);

  return (
    <>
      {/*<!-- Categories in DB -->*/}
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-gray-800">
              Categorías en la base de datos
            </h6>
          </div>
          <div className="card-body">
            <div className="row">
            {categoriesList.map((category, index) => {
                return <Category {...category} key={category + index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CategoryInDb;

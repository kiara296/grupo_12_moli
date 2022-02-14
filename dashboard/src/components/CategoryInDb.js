import React, { useState, useEffect } from "react";
import Category from "./Category";
import {httpProductService} from "../service/httpProductService";
import '../assets/css/general.css'

function CategoryInDb() {
  const [categoriesList, setCategoriesList] = useState([]);
  
  useEffect(() => {
    fetchProdcts()
  },[]);
  
  const fetchProdcts = async() => {
    try{
     const {countByCategory} = await httpProductService.getProducts(0);
 
     setCategoriesList(countByCategory)
    } catch(e){console.log(e)}
  }

  return (
    <>
      {/*<!-- Categories in DB -->*/}
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              Cantidad de productos por categoría
            </h5>
          </div>
          <div className="card-body">
            <div className="row rowCategories">
            {categoriesList.map((category, index) => {
                return <Category category={category} key={category + index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CategoryInDb;

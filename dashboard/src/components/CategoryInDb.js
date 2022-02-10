import React, { useState, useEffect } from "react";
import Category from "./Category";
import {httpProductService} from "../service/httpProductService";

function CategoryInDb() {
  const [categoriesList, setCategoriesList] = useState([]);

 const fetchProdcts = async() => {
   try{
    const {countByCategory} = await httpProductService.getProducts(0);

    setCategoriesList(countByCategory)
   } catch(e){console.log(e)}
 }
 
  useEffect(() => {
    fetchProdcts()
  },[]);


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

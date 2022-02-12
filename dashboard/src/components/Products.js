import React, { useEffect, useState } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import { httpProductService } from "../service/httpProductService";


const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
 

  useEffect(() => {
    
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const totalProducts = await httpProductService.getProducts(0);
      
      const { products } = totalProducts;
      
      
      setAllProducts(products);
      console.log(allProducts)
      
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      {/*<!-- PRODUCTS LIST -->*/}
      <h1 className="h3 mb-2 text-gray-800">Listado de todos los productos</h1>
      {/*<!-- Tabla -->*/}
      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered table-striped table-hover"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <TableHead />
              <TableBody />
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default Products;

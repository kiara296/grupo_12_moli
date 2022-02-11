import React from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Products = () => {
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

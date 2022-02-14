import React, { useEffect, useState } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import { httpProductService } from "../service/httpProductService";
import '../assets/css/general.css'

let headValues = {
  id: "Id",
  name: "Nombre",
  category: "Categoría",
  price: "Precio",
  discount: "Descuento",
  description: "Descripción",
};


const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [allPages, setAllPages] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);
  
  useEffect(() => {
    fetchData();
  }, [page]);
 
  const nextPage = () => {
   
    setPage(page +1 > allPages ? page : page +1)
    console.log(page , '+++++++++++')
    /* 3 +1 = 4 > 3 ? 3 : 4 */
  }
  
  const previousPage = () => {
    const numPage = page -1
    setPage(numPage < 0 ? 0 : numPage )
  }

  const fetchData = async () => {
    try {
      const totalProducts = await httpProductService.getProducts(page);

      const { products } = totalProducts;
      const { totalPages } = totalProducts ;

      setAllProducts(products);
      setAllPages(totalPages);
      
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      {/*<!-- PRODUCTS LIST -->*/}
      <h1 className="h3 mb-2 text-gray-800 tituloProductos">Listado de todos los productos</h1>
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
              <TableHead headValues={headValues} />
              {allProducts.map((producto, index) => {
                return <TableBody {...producto} key={index} />;
              })}
            </table>
          </div>
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
              <li class="page-item">
                <button onClick={previousPage} class="page-link" >
                  Previous
                </button>
              </li>
              <li class="page-item">
                <button onClick={nextPage} class="page-link" >
                  Next
                </button>              
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
export default Products;

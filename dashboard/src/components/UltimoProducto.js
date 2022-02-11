import React, { useState, useEffect, useRef } from "react";
import { httpProductService } from "../service/httpProductService";

function UltimoProducto() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    (async function () {
      try {
        const { products } = await httpProductService.getProducts();
        const lastProduct =  products.slice(-1)[0];
        setProductList(lastProduct);
        console.log(products, "+++++++");
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

 /* console.log(productList) */

  const cambiarColor = () => {
    //alert('Hola como vamos ')
    //console.log(parrafo);
    parrafo.current.classList.toggle("bg-warning");
  };

  const parrafo = useRef();

  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          {/*<h5  onMouseOver={()=> cambiarColor('Cursada que ya culmina')}   className="m-0 font-weight-bold text-gray-800">Last movie in Data Base</h5>*/}
          <h5
            onMouseOver={cambiarColor}
            className="m-0 font-weight-bold text-gray-800"
          >
            Último producto creado
          </h5>
        </div>
        <div className="card-body">
          <div className="text-center">
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              style={{ width: 40 + "rem" }}
              src={productList.image}
              alt={productList.alt}
            />
          </div>
          {/* Precio */}
          <p ref={parrafo}>
          {productList.price}
          </p>
          {/* descripcion */}
          <p ref={parrafo}>
          {productList.description}
          </p>
          <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">
            Ver detalle
          </a>
        </div>
      </div>
      ;
    </>
  );
}



export default UltimoProducto;

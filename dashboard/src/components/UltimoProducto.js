import React, { useState, useEffect, useRef } from "react";
import { httpProductService } from "../service/httpProductService";
import image from '../assets/images/productImages/pan-dulce.jpg'



function UltimoProducto() {
  const [lastCreated, setLastCreated] = useState([]);
  const [lastImage, setLastImage] = useState('');
  
  useEffect(() => {
    (async function () {
      try {
        const { lastProduct } = await httpProductService.getProducts(0);
      
        setLastCreated(lastProduct);
        setLastImage(lastProduct.image)
        
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);


 /*  const cambiarColor = () => {
    //alert('Hola como vamos ')
    //console.log(parrafo);
    parrafo.current.classList.toggle("");
  };

  const parrafo = useRef(); */

  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5
            className="m-0 font-weight-bold text-gray-800"
          >
            Último producto creado
          </h5>
        </div>
        <div className="card-body">
          <div class="font-weight-bold text-center">
          <p class="font-weight-bold" >
          {lastCreated.name}
          </p>
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              style={{ width: 40 + "rem" }}
              /* src= { '../assets/images/productImages/'+ lastImage} */
              src= {image}
              alt={lastCreated.alt}
            />
          </div>
          {/* Precio */}
          <p >
          <span class="font-weight-bold">Precio:</span> $ {lastCreated.price}
          </p>
          {/* descripcion */}
          <p >
          <span class="font-weight-bold">Descripción:</span> {lastCreated.description}
          </p>
        </div>
      </div>
    </>
  );
}



export default UltimoProducto;

import React from "react";
import CategoryInDb from "./CategoryInDb";
import UltimoProducto from "./UltimoProducto";
import CardsTotalsContainer from "./CardsTotalsContainer";

function CardsContainer() {
  return (
    <>
      {/*<!-- Content Row Top -->*/}
      <div className="container-fluid">
        <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Dashboard MOLI</h1>
        </div>

        {/*<!-- Content Row Movies-->*/}
        <CardsTotalsContainer />
        {/*<!-- End movies in Data Base -->*/}

        {/*<!-- Content Row Last Movie in Data Base -->*/}
        <div className="row">
          {/*<!-- Ultimo Producto in DB -->*/}
          <div className="col-lg-6 mb-4">
            <UltimoProducto />
          </div>
          {/*<!-- End content row Ultimo Producto in Data Base -->*/}

          {/*<!-- Category in DB -->*/}
          <CategoryInDb />

          {/*<!--End Category In Db-->*/}
        </div>
      </div>
      {/*<!--End Content Row Top-->*/}
    </>
  );
}
export default CardsContainer;

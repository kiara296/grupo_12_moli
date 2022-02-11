import React, { useEffect, useState } from "react";
import SmallCard from "./SmallCard";
import { httpProductService } from "../service/httpProductService";

/* let productInDataBase = {
    color:   "primary",
    titulo: "Total de Productos",
    valor: 21,
    icono: "fas fa-utensils",
}

let amount ={
    color:   "success",
    titulo: "Total de categorías",
    valor: 79,
    icono: "fas fa-tags",
 
}

let user = {
    color:   "warning",
    titulo: "Total de usuarios",
    valor: 49,
    icono: "fas fa-user",
}

let cardProps = [productInDataBase,amount,user];
 */

const ContentRowTop = () => {
  const [countProducts, setCountProducts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchProdcts();
  }, []);

  const fetchProdcts = async () => {
    try {
      const products = await httpProductService.getProducts(0);
        const users = await httpProductService.getUsers(0);

        const {totalUsers} = users
        
      const { totalProducts } = products;
      const { countByCategory } = products;
      const totalCategories = countByCategory.length;

      setCountProducts(total);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <React.Fragment>
      {/*<!-- Content Row -->*/}
      <div className="row">
        {cardProps.map((producto, index) => {
          return <SmallCard {...producto} key={index} />;
        })}
      </div>
    </React.Fragment>
  );
};
export default ContentRowTop;

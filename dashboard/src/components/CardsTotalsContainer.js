import React, { useEffect, useState } from "react";
import SmallCard from "./SmallCard";
import { httpProductService } from "../service/httpProductService";
import { httpUserService } from "../service/httpUserService";

 let productInDataBase = {
    color:   "primary",
    titulo: "Total de productos",
    icono: "fas fa-utensils",
}

let allCategories ={
    color:   "success",
    titulo: "Total de categorías",
    icono: "fas fa-tags",
 
}

let totalUser = {
    color:   "warning",
    titulo: "Total de usuarios",
    icono: "fas fa-user",
}


 

const CardsTotalsContainer = () => {
  const [countProducts, setCountProducts] = useState([]);
  const [totalCategories, setTotalCategories] = useState([]);
  const [users, setUsers] = useState([]);
  const [cardProps, setCardProps] =useState([]);

  useEffect(() => {
    
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const products = await httpProductService.getProducts(0);
      const users = await httpUserService.getUsers(0);

      const {totalUsers} = users
      const { totalProducts } = products;
      const { countByCategory } = products;
      const totalCategories = countByCategory.length;
      let cards = [{...productInDataBase, valor:totalProducts},{...totalUser, valor:totalUsers},{...allCategories, valor:totalCategories}];
      
      setCountProducts(totalProducts);
      setUsers(totalUsers);
      setTotalCategories(totalCategories)
      setCardProps(cards)
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {/*<!-- Content Row -->*/}
      <div className="row">
       {cardProps.map((producto, index) => {
          return <SmallCard {...producto} key={index} />;
        })} 
      </div>
    </>
  );
};
export default CardsTotalsContainer;

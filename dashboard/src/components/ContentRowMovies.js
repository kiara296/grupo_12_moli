import React from 'react';
import SmallCard from './SmallCard';

let productInDataBase = {
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


function ContentRowTop(){
    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                cardProps.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default ContentRowTop;
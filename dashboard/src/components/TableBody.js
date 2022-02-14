import React from "react";

function TableBody(props) {
  return (
    <>
      <tbody>
        <tr>
          <td>{props.id}</td>
          <td>{props.name}</td>
          <td>{props.product_category}</td>
          <td>{'$' + ' ' + props.price}</td>
          <td>{ props.discount + '%' + ' '}</td>
          <td>{props.description}</td>
        </tr>
      </tbody>
    </>
  );
}
export default TableBody;

import React from "react";

function TableHead(props) {
  return (
    <>
      <thead className="table-primary">
        <tr>
          <td>{props.id}</td>
          <td>{props.name}</td>
          <td>{props.category}</td>
          <td>{props.price}</td>
          <td>{props.discount}</td>
          <td>{props.description}</td>
        </tr>
      </thead>
    </>
  );
}
export default TableHead;

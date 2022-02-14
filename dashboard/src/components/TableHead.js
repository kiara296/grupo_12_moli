import React from "react";

function TableHead({headValues}) {
  return (
    <>
      <thead className="table tableHead">
        <tr>
          <td>{headValues.id}</td>
          <td>{headValues.name}</td>
          <td>{headValues.category}</td>
          <td>{headValues.price}</td>
          <td>{headValues.discount}</td>
          <td>{headValues.description}</td>
        </tr>
      </thead>
    </>
  );
}
export default TableHead;

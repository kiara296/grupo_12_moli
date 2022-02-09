import React from "react";

function TableHead(props) {
  return (
    <>
      <thead className="table-primary">
      <tr>
        <td>{props.id}</td>
        <td>{props.title}</td>
        <td>{props.rating}</td>
        <td>{props.awards}</td>
        <td>{props.length}</td>
      </tr>
      </thead>
    </>
  );
}
export default TableHead;

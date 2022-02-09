import React from "react";

function TableBody(props) {
  return (
    <>
      <tbody>
        <tr>
          <td>{props.id}</td>
          <td>{props.title}</td>
          <td>{props.rating}</td>
          <td>{props.awards}</td>
          <td>{props.length}</td>
        </tr>
      </tbody>
    </>
  );
}
export default TableBody;

import React from "react";

export default function TableRows(props) {
  return (
    <tr>
      <td>{props.data.firstName}</td>
      <td>{props.data.assignmentCode}</td>
      <td>{props.data.difficultyGrade}</td>
      <td>{props.data.funGrade}</td>
    </tr>
  );
}

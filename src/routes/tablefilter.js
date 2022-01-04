import React from "react";
import scores from "../data/result.json";

export default function TableFilter(props) {
  const assignments = [
    ...new Set(props.data.map((item) => item.assignmentCode)),
  ];
  const students = [...new Set(props.data.map((item) => item.firstName))];
  const selectAssignment = assignments.map((item) => {
    return <option value={item}>{item}</option>;
  });
  const selectStudent = students.map((item) => {
    return <option value={item}>{item}</option>;
  });

  return (
    <div>
      <select
        name="filter-student"
        id="filter-student"
        value=""
        onChange={props.handleChange}
      >
        <option value="">-- Filter on Student: --</option>
        {selectStudent}
        <option value="reset">Reset filter</option>
      </select>
      <select
        name="filter-assignment"
        id="filter-assignment"
        value=""
        onChange={props.handleChange}
      >
        <option value="">-- Filter on Assignment: --</option>

        {selectAssignment}

        <option value="reset">Reset filter</option>
      </select>
    </div>
  );
}

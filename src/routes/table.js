import React, { Component } from "react";
import scores from "../data/result.json";
import TableRows from "./tablerows";
import TableFilter from "./tablefilter";

class Table extends Component {
  constructor() {
    super();
    this.state = { scores: scores };

    this.baseState = this.state;

    this.handleTableFilter = this.handleTableFilter.bind(this);
  }

  handleTableFilter(event) {
    event.preventDefault();
    this.setState((prevState) => {
      const prevStateScores = [...prevState.scores];

      switch (event.target.id) {
        case "filter-student":
          if (event.target.value === "reset") {
            return this.baseState;
          } else {
            const filteredStudents = prevStateScores.filter(
              (item) => item.firstName === event.target.value
            );
            const newStateStudents = { scores: filteredStudents };

            return newStateStudents;
          }
        case "filter-assignment":
          if (event.target.value === "reset") {
            return this.baseState;
          } else {
            const filteredAssignments = prevStateScores.filter(
              (item) => item.assignmentCode === event.target.value
            );
            const newStateAssignments = { scores: filteredAssignments };

            return newStateAssignments;
          }
        default:
          return prevStateScores;
      }
    });
  }

  render() {
    const newScores = this.state.scores;
    const loopedArray = newScores.map((item, index) => {
      return <TableRows key={index} data={item} />;
    });
    const arrayForFilter = newScores.map((item, index) => ({
      id: index,
      assignmentCode: item.assignmentCode,
      difficultyGrade: item.difficultyGrade,
      enjoymentGrade: item.enjoymentGrade,
      firstName: item.firstName,
    }));

    return (
      <div>
        <h2>Table View</h2>
        <TableFilter
          handleChange={this.handleTableFilter}
          data={arrayForFilter}
          key={arrayForFilter.id}
        />

        <table>
          <tbody>
            <tr
              style={{
                fontWeight: "bold",
                backgroundColor: "#333333",
                color: "#ffffff",
              }}
            >
              <td>Student</td>
              <td>Assignment</td>
              <td>Difficulty</td>
              <td>Fun</td>
            </tr>

            {loopedArray}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;

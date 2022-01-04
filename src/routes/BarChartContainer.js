import React, { Component } from "react";
import BarChart from "./BarChart";
import scores from "../data/result.json";
import LineChart from "./LineChart";

class BarChartContainer extends Component {
  constructor() {
    super();
    this.state = { scores: scores };

    this.calculateAverageDifficulty =
      this.calculateAverageDifficulty.bind(this);
    this.calculateAverageFun = this.calculateAverageFun.bind(this);
  }

  calculateAverageDifficulty(assignment) {
    const filteredScores = this.state.scores.filter(
      (item) => item.assignmentCode === assignment
    );
    let avgDiff =
      filteredScores.reduce(
        (total, next) => total + parseInt(next.difficultyGrade),
        0
      ) / filteredScores.length;
    if (!avgDiff) {
      avgDiff = 0;
    }

    return avgDiff;
  }

  calculateAverageFun(assignment) {
    const filteredScores = this.state.scores.filter(
      (item) => item.assignmentCode === assignment
    );
    let avgFun =
      filteredScores.reduce(
        (total, next) => total + parseInt(next.funGrade),
        0
      ) / filteredScores.length;
    if (!avgFun) {
      avgFun = 0;
    }

    return avgFun;
  }

  render() {
    const newScores = this.state.scores;
    const assignments = [
      ...new Set(newScores.map((item) => item.assignmentCode)),
    ];

    //create new object with averages per assignment
    const newAssignmentRatingAverage = assignments.map((ass) => ({
      assignment: ass,
      difficultyRating: this.calculateAverageDifficulty(ass),
      enjoymentRating: this.calculateAverageFun(ass),
    }));

    // Add label to object
    const assignmentRatingAverageWithLabels = newAssignmentRatingAverage
      .map((avg, index) => ({
        id: index,
        assignment: avg.assignment,
        difficultyRating: avg.difficultyRating,
        enjoymentRating: avg.enjoymentRating,
        label: `Opdracht ${
          avg.assignment
        }, difficulty: ${avg.difficultyRating.toFixed(
          1
        )}, fun: ${avg.enjoymentRating.toFixed(1)}`,
      }))
      .sort((a, b) => (b.assignment > a.assignment ? 1 : -1));

    return (
      <div>
        <h2>Assignments Bar Graph</h2>
        <BarChart
          data={assignmentRatingAverageWithLabels}
          tickFormat={assignments}
        />
        <LineChart data={newAssignmentRatingAverage} tickFormat={assignments} />
      </div>
    );
  }
}

export default BarChartContainer;

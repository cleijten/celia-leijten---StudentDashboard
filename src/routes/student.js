import { useParams } from "react-router-dom";

import scores from "../data/result.json";
import students from "../data/students.json";
import BarChart from "./BarChart";

function getStudent(number) {
  return students.find((stud) => stud.id === number);
}

export default function Student() {
  let params = useParams();
  let student = getStudent(parseInt(params.studentId, 10));
  const filterScores = scores.filter((item) => {
    return item.firstName === student.firstName;
  });

  const assignmentRatingAverageWithLabels = filterScores.map((avg, index) => ({
    id: index,
    assignment: avg.assignmentCode,
    difficultyRating: parseInt(avg.difficultyGrade),
    enjoymentRating: parseInt(avg.funGrade),
    label: `Opdracht ${avg.assignmentCode}, difficulty: ${avg.difficultyGrade}, fun: ${avg.funGrade}`,
  }));

  return (
    <main className="studentview">
      <div style={{ display: "flex" }}>
        <img src={student.photoUrl}></img>
        <div>
          <h3>
            {student.firstName} {student.lastName}
          </h3>

          <p>
            Email: {student.email}
            <br />
            Phone: {student.phone}
          </p>
        </div>
      </div>

      <h4>Ratings from {student.firstName}</h4>
      <BarChart
        data={assignmentRatingAverageWithLabels}
        tickformat={assignmentRatingAverageWithLabels}
      />
    </main>
  );
}

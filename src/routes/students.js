import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import students from "../data/students.json";

export default function Students() {
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      <h2>Student Overview</h2>
      <div style={{ display: "flex" }}>
        <nav className="studentnav">
          {students
            .filter((student) => {
              let filter = searchParams.get("filter");
              if (!filter) return true;
              let name = student.firstName.toLowerCase();
              return name.startsWith(filter.toLowerCase());
            })
            .map((student) => {
              console.log("student students", student);
              return (
                <NavLink
                  className="studentlist"
                  to={`/students/${student.id}`}
                  key={student.id}
                >
                  {student.firstName}
                </NavLink>
              );
            })}
        </nav>
        <Outlet />
      </div>
    </div>
  );
}

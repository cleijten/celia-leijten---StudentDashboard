import React from "react";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Student Dashboard</h1>
      <nav>
        <Link to="/barchart">Charts</Link>
        <Link to="/students">Students</Link>
        <Link to="/table">Table</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;

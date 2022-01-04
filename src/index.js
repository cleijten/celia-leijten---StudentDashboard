import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BarChartContainer from "./routes/BarChartContainer";
import Students from "./routes/students";
import Student from "./routes/student";
import Table from "./routes/table";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="barChart" element={<BarChartContainer />} />
        <Route path="students" element={<Students />}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select a student</p>
              </main>
            }
          />
          <Route path=":studentId" element={<Student />} />
        </Route>
        <Route path="table" element={<Table />} />
        <Route
          path="*" //wanneer geen enkele route matcht
          element={
            <main style={{ padding: "1rem" }}>
              <p>Niets te zien!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

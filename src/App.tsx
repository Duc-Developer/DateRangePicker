import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DateRangePickers from "./DateRangePicker";
import { DateRange } from "./DateRangePicker/Utilities/types";

function App() {
  const handleChange = (dateRange: DateRange) => {};
  return (
    <div className="App">
      <DateRangePickers open onChange={handleChange} />
    </div>
  );
}

export default App;

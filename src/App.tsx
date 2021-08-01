import React from "react";
import "./App.css";
import DateRangePickers from "./DateRangePicker";
import { DateRange } from "./DateRangePicker/Utilities/types";

function App() {
  const handleChange = (dateRange: DateRange) => {
    console.log("change Date rooot", dateRange);
  };
  return (
    <div className="App">
      <DateRangePickers onChange={handleChange} />
    </div>
  );
}

export default App;

import React from "react";
import { useState } from "react";
import "./App.css";
import DateRangePickers from "./DateRangePicker";
import { DateRange } from "./DateRangePicker/Utilities/types";

const now = new Date();
const initialDateRange = {
  startDate: now,
  endDate: now,
};
function App() {
  const [dates, setDates] = useState(initialDateRange);
  const handleChange = (dateRange: DateRange) => {
    const { startDate, endDate } = dateRange;
    if (startDate && endDate) {
      setDates({ startDate: startDate, endDate: endDate });
    } else {
      setDates(initialDateRange);
    }
  };
  return (
    <div className="App">
      <DateRangePickers initialDateRange={dates} onChange={handleChange} />
    </div>
  );
}

export default App;

import React, { useState } from "react";

import DateRangePickers from "./DateRangePicker";
import { DateRange } from "./DateRangePicker/Utilities/types";

const now = new Date();
const initialDateRange = {
  startDate: now,
  endDate: now,
};
function MiniDateRange() {
  const [dates, setDates] = useState(initialDateRange);
  const handleChange = (dateRange: DateRange) => {
    const { startDate, endDate } = dateRange;
    if (startDate && endDate) {
      setDates({ startDate: startDate, endDate: endDate });
    } else {
      setDates(initialDateRange);
    }
  };
  return <DateRangePickers initialDateRange={dates} onChange={handleChange} />;
}

export default MiniDateRange;

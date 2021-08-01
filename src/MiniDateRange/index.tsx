import { Button } from "@material-ui/core";
import React, { useState } from "react";

import DateRangePickers from "./DateRangePicker";
import { DateRange } from "./DateRangePicker/Utilities/types";
import { addDays } from "./DateRangePicker/Helpers";

const now = new Date();
const initialDateRange = {
  startDate: now,
  endDate: now,
};

const dateRange7last = {
  startDate: addDays(now, -7),
  endDate: now,
};

const dateRange30last = {
  startDate: addDays(now, -30),
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

  return (
    <div style={{ display: "flex" }}>
      <Button
        onClick={() => {
          setDates(dateRange7last);
        }}
        variant="contained"
        color="primary"
        style={{ marginRight: 8 }}
      >
        Last 7 days
      </Button>
      <Button
        onClick={() => {
          setDates(dateRange30last);
        }}
        variant="contained"
        color="secondary"
        style={{ marginRight: 8 }}
      >
        Last 30 days
      </Button>
      <DateRangePickers initialDateRange={dates} onChange={handleChange} />
    </div>
  );
}

export default MiniDateRange;

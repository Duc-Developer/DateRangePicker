import React, { useRef } from "react";
import DatePicker, { DateRangePickerProps } from "./DatePicker";
import { DateRange } from ".//Utilities/types";
import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import EditIcon from "@material-ui/icons/Edit";
import Popper from "@material-ui/core/Popper";
import Fade from "@material-ui/core/Fade";

import { getDate, getMonth, getYear } from "./Helpers";

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type Props = Omit<DateRangePickerProps, "open">;

const initialTextFieldValue = "Start Date - End Date";
function DateRangePickers(props: Props) {
  const { onChange } = props;
  const [isOpenDatePicker, setIsOpenDatePicker] = useState(false);
  const [textFieldValue, setTextFieldValue] = useState<string>(
    initialTextFieldValue
  );
  const [errors, setErrors] = useState("");
  const anchorEl = useRef(null);

  const handleChange = (dateRange: DateRange) => {
    const { startDate, endDate } = dateRange;
    let newTextFieldValue = initialTextFieldValue;
    if (startDate && endDate) {
      newTextFieldValue = `${dateStringToPattern(
        startDate
      )} - ${dateStringToPattern(endDate)}`;
      setErrors("");
    }
    setTextFieldValue(newTextFieldValue);
    setIsOpenDatePicker(!isOpenDatePicker);
    onChange(dateRange);
  };

  const handleOpenDatePicker = () => {
    setIsOpenDatePicker(!isOpenDatePicker);
  };

  const handleError = () => {
    setErrors("Date range is invalid!");
  };

  return (
    <>
      <TextField
        id="date-range-pickers"
        label="Date"
        inputProps={{ readOnly: true }}
        variant="outlined"
        size="small"
        ref={anchorEl}
        InputLabelProps={{ shrink: true }}
        value={textFieldValue}
        error={!!errors}
        helperText={errors}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <EditIcon
                style={{ cursor: "pointer" }}
                onClick={handleOpenDatePicker}
              />
            </InputAdornment>
          ),
        }}
      />
      <Popper
        open={isOpenDatePicker}
        placement="bottom"
        anchorEl={anchorEl?.current}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <DatePicker
              open
              {...props}
              onChange={handleChange}
              handleError={handleError}
            />
          </Fade>
        )}
      </Popper>
    </>
  );
}

function dateStringToPattern(dateTime: Date | any) {
  return `${getDate(dateTime)}/${getMonth(dateTime)}/${getYear(dateTime)}`;
}

export default DateRangePickers;

import * as React from "react";
import { StylesProvider } from "@material-ui/core/styles";

// eslint-disable-next-line no-unused-vars
import DateRangePickerWrapper, {
  DateRangePickerWrapperProps,
} from "./DateRangePickerWrapper";
import generateClassName from "./Utilities/generateClassName";

const DateRangePickerExporter: React.FunctionComponent<DateRangePickerWrapperProps> =
  (props: DateRangePickerWrapperProps) => (
    <StylesProvider generateClassName={generateClassName}>
      <DateRangePickerWrapper {...props} />
    </StylesProvider>
  );

export default DateRangePickerExporter;

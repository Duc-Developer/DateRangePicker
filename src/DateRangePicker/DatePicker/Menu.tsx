import React from "react";
import {
  Paper,
  Grid,
  Divider,
  makeStyles,
  // eslint-disable-next-line no-unused-vars
  Theme,
} from "@material-ui/core";
import { differenceInCalendarMonths } from "../Helpers";
import Month from "./Month";
import DefinedRanges from "./DefinedRanges";
import {
  // eslint-disable-next-line no-unused-vars
  DateRange,
  // eslint-disable-next-line no-unused-vars
  DefinedRange,
  // eslint-disable-next-line no-unused-vars
  Setter,
  // eslint-disable-next-line no-unused-vars
  NavigationAction,
} from "../Utilities/types";
import { MARKERS } from ".";

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    padding: "20px 70px",
  },
  headerItem: {
    flex: 1,
    textAlign: "center",
  },
  divider: {
    borderLeft: `1px solid ${theme.palette.action.hover}`,
    marginBottom: 20,
  },
}));

interface MenuProps {
  dateRange: DateRange;
  ranges: DefinedRange[];
  minDate: Date;
  maxDate: Date;
  firstMonth: Date;
  secondMonth: Date;
  setFirstMonth: Setter<Date>;
  setSecondMonth: Setter<Date>;
  setDateRange: Setter<DateRange>;
  helpers: {
    inHoverRange: (day: Date) => boolean;
  };
  handlers: {
    onDayClick: (day: Date) => void;
    onDayHover: (day: Date) => void;
    onMonthNavigate: (marker: symbol, action: NavigationAction) => void;
  };
  GroupActions: React.FC;
}

const Menu: React.FunctionComponent<MenuProps> = (props: MenuProps) => {
  const classes = useStyles();

  const {
    ranges,
    dateRange,
    minDate,
    maxDate,
    firstMonth,
    setFirstMonth,
    secondMonth,
    setSecondMonth,
    setDateRange,
    helpers,
    handlers,
    GroupActions,
  } = props;

  const canNavigateCloser =
    differenceInCalendarMonths(secondMonth, firstMonth) >= 2;
  const commonProps = {
    dateRange,
    minDate,
    maxDate,
    helpers,
    handlers,
  };
  return (
    <Paper elevation={5} square>
      <Grid container direction="row" wrap="nowrap">
        <Grid>
          <Divider />
          <Grid container direction="row" justify="center" wrap="nowrap">
            <Month
              {...commonProps}
              value={firstMonth}
              setValue={setFirstMonth}
              navState={[true, canNavigateCloser]}
              marker={MARKERS.FIRST_MONTH}
            />
            <div className={classes.divider} />
            <Month
              {...commonProps}
              value={secondMonth}
              setValue={setSecondMonth}
              navState={[canNavigateCloser, true]}
              marker={MARKERS.SECOND_MONTH}
            />
          </Grid>
        </Grid>
      </Grid>
      {<GroupActions />}
    </Paper>
  );
};

export default Menu;

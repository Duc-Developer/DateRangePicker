/* eslint-disable radix */

import {
  Grid,
  makeStyles,
  IconButton,
  Select,
  MenuItem,
  Typography,
} from "@material-ui/core";
import React from "react";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import { setMonth, getMonth, setYear, getYear } from "../Helpers";

const useStyles = makeStyles(() => ({
  iconContainer: {
    padding: 5,
  },
  icon: {
    padding: 10,
    "&:hover": {
      background: "none",
    },
  },
}));

interface HeaderProps {
  date: Date;
  setDate: (date: Date) => void;
  nextDisabled: boolean;
  prevDisabled: boolean;
  onClickNext: () => void;
  onClickPrevious: () => void;
}

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const generateYears = (relativeTo: Date, count: number) => {
  const half = Math.floor(count / 2);
  return Array(count)
    .fill(0)
    .map((_y, i) => relativeTo.getFullYear() - half + i); // TODO: make part of the state
};

const Header: React.FunctionComponent<HeaderProps> = ({
  date,
  setDate,
  nextDisabled,
  prevDisabled,
  onClickNext,
  onClickPrevious,
}: HeaderProps) => {
  const classes = useStyles();

  const handleMonthChange = (event: any) => {
    setDate(setMonth(date, parseInt(event.target.value)));
  };

  const handleYearChange = (event: any) => {
    setDate(setYear(date, parseInt(event.target.value)));
  };

  return (
    <Grid container justify="space-between" alignItems="center">
      <Grid item className={classes.iconContainer}>
        <IconButton
          className={classes.icon}
          disabled={prevDisabled}
          onClick={onClickPrevious}
        >
          <ChevronLeft color={prevDisabled ? "disabled" : "action"} />
        </IconButton>
      </Grid>
      <Grid item>
        <Typography style={{ fontWeight: "bold" }}>
          {MONTHS[getMonth(date)]}
        </Typography>
      </Grid>
      <Grid item className={classes.iconContainer}>
        <IconButton
          className={classes.icon}
          disabled={nextDisabled}
          onClick={onClickNext}
        >
          <ChevronRight color={nextDisabled ? "disabled" : "action"} />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Header;

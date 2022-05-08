import React from "react";
import { Grid, Typography } from "@material-ui/core";

import useStyles from "./style";

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.navbar}>
        <Typography className={classes.brandText}>
          Kanban Dashboard
        </Typography>
      </Grid>
    </>
  );
};

export default Navbar;

import { Typography } from "@mui/material";
import React from "react";
import useStyles from "./style";

const Tags = ({text,color}) => {
  const classes = useStyles();
  return (
      <>
        <div style={{background: color +"32"}} className={classes.tagStyle}>
            <Typography variant="subtitle2">{text}</Typography>
        </div>
      </>
  );
};

export default Tags;

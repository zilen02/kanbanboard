import { Grid } from "@material-ui/core";
import React from "react";
import Boards from "./components/boards/Boards";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <>
      <Grid container>
        <Navbar />
        <Boards />
      </Grid>
    </>
  );
};

export default App;

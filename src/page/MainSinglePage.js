import { Grid } from "@mui/material";

import React from "react";
import LiveTransaction from "../components/LiveTransaction";
import Transaction from "../components/Transaction";
import Notification from "../components/Notification";
import Subscribers from "../components/Subscribers";
import Chart from "../components/Chart";

const MainSinglePage = () => {
  return (
    <>
      <Grid container>
        {/* Left Side  */}
        <Grid item md={12} lg={9} sx={{ boxShadow: "2px 1px #888888" }}>
          <LiveTransaction />
          <Transaction />
        </Grid>
        {/* Right Side  */}
        <Grid
          item
          md={12}
          lg={3}
          sx={{ boxShadow: "2px 1px #888888", width: "100vw" }}
        >
          <Notification />
        </Grid>
      </Grid>
      <Grid container>
        {/* Left Side  */}
        <Grid item lg={9} sx={{ boxShadow: "2px 1px #888888", width: "100vw" }}>
          <Subscribers />
        </Grid>
        {/* Right Side  */}
        <Grid item lg={3} sx={{ boxShadow: "2px 1px #888888", width: "100vw" }}>
          <Chart />
        </Grid>
      </Grid>
    </>
  );
};

export default MainSinglePage;

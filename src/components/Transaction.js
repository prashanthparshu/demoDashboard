import { Grid } from "@mui/material";
import React from "react";
import RecentTransaction from "./RecentTransaction";
import ActivePlan from "./ActivePlan";

const Transaction = () => {
  return (
    <Grid container>
      {/* Left Side  */}
      <Grid
        item
        lg={9}
        md={12}
        xs={12}
        sx={{ padding: "10px", boxShadow: "2px 1px #888888" }}
      >
        <RecentTransaction />
      </Grid>
      {/* Right Side  */}
      <Grid
        item
        lg={3}
        md={12}
        xs={12}
        sx={{ padding: "10px", boxShadow: "2px 1px #888888" }}
      >
        <ActivePlan />
      </Grid>
    </Grid>
  );
};

export default Transaction;

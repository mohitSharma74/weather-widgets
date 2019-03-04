import React from "react";
import { Typography } from "@material-ui/core";

export default ({ classFooter }) => (
  <footer className={classFooter}>
    <Typography variant="h6" align="center" gutterBottom>
      Weather Widgets
    </Typography>
    <Typography
      variant="subtitle1"
      align="center"
      color="textSecondary"
      component="p"
    >
      All copyrights reserved to Me, myself and I only. So feel free to copy
      anything and everything.
    </Typography>
  </footer>
);

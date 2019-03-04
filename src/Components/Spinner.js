import React, { PureComponent } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

export default class Spinner extends PureComponent {
  render() {
    return <CircularProgress />;
  }
}

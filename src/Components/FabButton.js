import React, { PureComponent, Fragment } from "react";
import { withStyles, Fab, Icon } from "@material-ui/core";

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  }
});

export default withStyles(styles)(
  class FabButton extends PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
      const { handleFabClick } = this.props;
      return (
        <Fragment>
          <Fab
            variant="extended"
            color="secondary"
            aria-label="Edit Location"
            className={this.props.classes.fab}
            onClick={handleFabClick}
          >
            <Icon>edit_icon</Icon>
            Change your Location
          </Fab>
        </Fragment>
      );
    }
  }
);

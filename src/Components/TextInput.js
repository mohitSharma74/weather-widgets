import React, { PureComponent, Fragment } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles, TextField } from "@material-ui/core";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 2
  },
  menu: {
    width: 200
  }
});

export default withStyles(styles)(
  class TextInput extends PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
      const { classes, handleChange, currentLoc, locations } = this.props;
      return (
        <Fragment>
          <TextField
            id="outlined-select-currency"
            select
            label="Change Location"
            className={classes.textField}
            value={currentLoc}
            onChange={handleChange}
            SelectProps={{
              MenuProps: {
                className: classes.menu
              }
            }}
            helperText="Please select a location"
            margin="normal"
            variant="outlined"
          >
            {locations.map((loc, index) => {
              return (
                <MenuItem key={index} value={loc}>
                  {loc}
                </MenuItem>
              );
            })}
          </TextField>
        </Fragment>
      );
    }
  }
);

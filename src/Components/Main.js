import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

import TextInput from "./TextInput";

const styles = theme => ({
  heroUnit: {
    backgroundColor: theme.palette.background.paper
  },
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4
  }
});

export default withStyles(styles)(
  ({ classes, locations, handleChange, currentLoc }) => (
    <div className={classes.heroUnit}>
      <div className={classes.heroContent}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Weather Forecast
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          Below is the weather forecast for last 5 days in the city selected.
          Please feel free to experiment.
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={16} justify="center">
            <Grid item>
              <TextInput
                locations={locations}
                handleChange={handleChange}
                currentLoc={currentLoc}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
);

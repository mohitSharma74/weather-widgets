import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import Cloud from "@material-ui/icons/Cloud";

import CardGrid from "./Components/CardGrid";
import withFetching from "./Components/withFetching";
import Footer from "./Components/Footer";
import Main from "./Components/Main";

import { withStyles } from "@material-ui/core/styles";
import { extractData, toTitleCase } from "./Util/util";
import { locations } from "./configs/config";

const styles = theme => ({
  appBar: {
    position: "relative",
    color: "secondary"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  icon: {
    marginRight: theme.spacing.unit * 2
  },
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
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%"
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6
  }
});

class Album extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { data: {} };
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    if (!nextProps.isLoading) {
      return { data: nextProps.data };
    }

    return null;
  }

  getCardDescription = ({
    data: {
      city: { coord, name, population, country }
    }
  }) =>
    `${toTitleCase(
      name
    )} in ${country.toUpperCase()} has population of ${population}, and is situated on latitude of ${
      coord.lat
    } and longitude of ${coord.lon}`;

  render() {
    const { classes, isLoading } = this.props,
      cardSubtitles = !isLoading ? this.getCardDescription(this.props) : null,
      dataObj = !isLoading ? extractData(this.state.data) : null;

    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar
          position="static"
          className={classes.appBar}
          color={classes.color}
        >
          <Toolbar>
            <Cloud className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap>
              Weather Widgets
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          <Main
            locations={locations}
            handleChange={this.props.handleChange}
            currentLoc={this.props.currentLoc}
          />
          <div className={classNames(classes.layout, classes.cardGrid)}>
            {
              <Grid container spacing={40}>
                {dataObj
                  ? dataObj.map((obj, index) => {
                      const {
                        description,
                        dt,
                        pressure,
                        population,
                        temp
                      } = obj;
                      return (
                        <CardGrid
                          gridKey={index}
                          cardClasses={classes.card}
                          title="Image Title"
                          cardContentClasses={classes.cardContent}
                          cardHeading={dt}
                          cardSubtitles={cardSubtitles}
                          sm={6}
                          md={4}
                          lg={3}
                          description={description}
                          dt={dt}
                          pressure={pressure}
                          population={population}
                          temp={temp}
                        />
                      );
                    })
                  : null}
              </Grid>
            }
          </div>
        </main>
        <Footer footerClass={styles.footer} />
      </React.Fragment>
    );
  }
}

Album.propTypes = {
  classes: PropTypes.object.isRequired,
  isLoading: PropTypes.bool,
  currentLoc: PropTypes.string,
  handleChange: PropTypes.func
};

export default withFetching(withStyles(styles)(Album));

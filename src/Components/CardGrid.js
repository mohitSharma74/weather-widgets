import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography
} from "@material-ui/core";

const CardGrid = ({
  gridKey,
  cardClasses,
  cardMediaClasses,
  cardContentClasses,
  title,
  cardHeading,
  cardSubtitles,
  name,
  description,
  dt,
  pressure,
  population,
  temp,
  ...rest
}) => {
  return (
    <Grid item key={gridKey} {...rest}>
      <Card className={cardClasses}>
        <CardMedia className={cardMediaClasses} title={title} />
        <CardContent className={cardContentClasses}>
          <Typography gutterBottom variant="h5" component="h2">
            {cardHeading}
          </Typography>
          <Typography>{cardSubtitles}</Typography>
          <Typography variant="subtitle2" align="center" gutterBottom>
            Weather: {description}
          </Typography>
          <Typography variant="subtitle2" align="center" gutterBottom>
            Timing: {dt}
          </Typography>
          <Typography variant="subtitle2" align="center" gutterBottom>
            Pressure: {pressure}
          </Typography>
          <Typography variant="subtitle2" align="center" gutterBottom>
            Population: {population}
          </Typography>
          <Typography variant="subtitle2" align="center" gutterBottom>
            Current Temp: {temp}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CardGrid;

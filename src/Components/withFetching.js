import React, { PureComponent } from "react";
import axios from "axios";
import { APPID, currentLocation } from "./../configs/config";

const withFetching = WrappedComponent => {
  return class extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        isLoading: true,
        currentLoc: currentLocation
      };
    }

    getWeatherData = (id, loc) =>
      axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${loc}&units=metric&APPID=${id}`
      );

    componentDidMount = async () => {
      const result = await this.getWeatherData(APPID, this.state.currentLoc);
      if (result) this.setState({ data: result.data, isLoading: false });
    };

    handleChange = event => {
      this.setState(
        { isLoading: true, currentLoc: event.target.value },
        async () => {
          const newResult = await this.getWeatherData(
            APPID,
            this.state.currentLoc
          );
          if (newResult) {
            this.setState({ data: newResult.data, isLoading: false });
          }
        }
      );
    };

    render() {
      return (
        <WrappedComponent
          data={this.state.data}
          isLoading={this.state.isLoading}
          currentLoc={this.state.currentLoc}
          handleChange={this.handleChange}
        />
      );
    }
  };
};

export default withFetching;

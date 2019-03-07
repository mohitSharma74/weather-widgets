import React, { useState, useEffect } from "react";
import axios from "axios";
import { APPID, currentLocation } from "./../configs/config";

const withFetching = WrappedComponent => {
  const WithFetching = props => {
    const [loc, setLoc] = useState(currentLocation);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getWeatherData = (id, loc) =>
      axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${loc}&units=metric&APPID=${id}`
      );

    const fetchData = async () => {
      const result = await getWeatherData(APPID, loc);
      if (result) {
        setData(result.data);
        setLoading(false);
      }
    };

    useEffect(() => {
      fetchData();
    }, [loc, loading]);

    const handleChange = event => {
      setLoading(true);
      setLoc(event.target.value);
    };

    return (
      <WrappedComponent
        data={data}
        isLoading={loading}
        currentLoc={loc}
        handleChange={handleChange}
      />
    );
  };

  return WithFetching;
};

export default withFetching;

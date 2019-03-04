const url = `http://api.openweathermap.org/data/2.5/forecast`;

const getOpenWeatherURLByCityName = (appId, cityName) =>
  `${url}?q=${cityName}&units=metric&APPID=${appId}?`;

const getOpenWeatherURLByCityId = (appId, cityId) =>
  `${url}?id=${cityId}&APPID=${appId}?`;

const getOpenWeatherURLByCoords = (appId, coords) =>
  `${url}?lat=${coords.lat}&lon=${coords.lon}&APPID=${appId}?`;

const getCurrentPositionCoords = () => {
  const coords = {},
    errorMsg = null;
  const successCb = position => {
    coords.lat = position.coords.latitude;
    coords.lon = position.coords.longitude;
  };
  const errorCb = err => console.error(err);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successCb, errorCb);
  } else errorMsg = "Geolocation is not supported by this browser";

  if (Object.keys(coords)) {
    return coords;
  }
};

const extractData = data => {
  let result = [],
    cityObj = data.city,
    d = data.list;
  d = d.reverse().slice(0, 6);
  d.map(forecast => {
    const res = {
      ...forecast.main,
      ...forecast.weather[0],
      ...cityObj,
      dt: `${new Date(forecast.dt).toLocaleTimeString()}`
    };
    result.push(res);
  });

  return result;
};

const toTitleCase = str => {
  return str.replace(
    /\w\S*/g,
    txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
};

export {
  getOpenWeatherURLByCityName,
  getOpenWeatherURLByCityId,
  getOpenWeatherURLByCoords,
  getCurrentPositionCoords,
  extractData,
  toTitleCase
};

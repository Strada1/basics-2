const API = {
  URL: 'https://api.openweathermap.org/data/2.5/weather',
  KEY: 'f660a2fb1e4bad108d6160b7f58c555f',
  START_CITY: 'Rome',
};

const EXTRA_VARIABLE = {
  DEGREE_SYMBOL: String.fromCharCode(0xb0),
  ABSOLUTE_ZERO: -273.15,
};

const SRC_IMG = {
  HEART: './assets/img/heart-shape.svg',
  BLACK_HEART: './assets/img/heart-black-shape.svg',
  MIST: './assets/img/weather-condition/mist.svg',
  SNOW: './assets/img/weather-condition/snow.svg',
  CLEAR: './assets/img/weather-condition/clear.svg',
  CLOUDS: './assets/img/weather-condition/clouds.svg',
  RAIN: './assets/img/weather-condition/rain.svg',
  THUNDERSTORM: './assets/img/weather-condition/thunderstorm.svg',
};

const WEATHER_CONDITION = [
  {
    name: 'Thunderstorm',
    src: SRC_IMG.THUNDERSTORM,
    condition: ['Thunderstorm'],
  },
  {
    name: 'Rain',
    src: SRC_IMG.RAIN,
    condition: ['Drizzle', 'Rain'],
  },
  {
    name: 'Clouds',
    src: SRC_IMG.CLOUDS,
    condition: ['Clouds'],
  },
  {
    name: 'Clear',
    src: SRC_IMG.CLEAR,
    condition: ['Clear'],
  },
  {
    name: 'Snow',
    src: SRC_IMG.SNOW,
    condition: ['Snow'],
  },
  {
    name: 'Mist',
    src: SRC_IMG.MIST,
    condition: [
      'Mist',
      'Smoke',
      'Haze',
      'Dust',
      'Fog',
      'Sand',
      'Ash',
      'Squall',
      'Tornado',
    ],
  },
];

const ERROR = {
  EMPTY_VALUE: '',
  INCORRECT_CITY: 'Enter the correct city name.',
  NOT_RESPONDING: 'Oops! Server disconnected.',
  FAILED_FETCH: 'Failed to fetch',
  UNDEFINED: "Cannot read properties of undefined (reading '0')",
  NaN: 'Data error, not a number received',
};

export { API, WEATHER_CONDITION, EXTRA_VARIABLE, SRC_IMG, ERROR };

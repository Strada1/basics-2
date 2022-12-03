const API = {
  URL_WEATHER: 'https://api.openweathermap.org/data/2.5/weather',
  URL_FORECAST: 'https://api.openweathermap.org/data/2.5/forecast',
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
  MIST: './assets/img/weather-state/mist.svg',
  SNOW: './assets/img/weather-state/snow.svg',
  CLEAR: './assets/img/weather-state/clear.svg',
  CLOUDS: './assets/img/weather-state/clouds.svg',
  RAIN: './assets/img/weather-state/rain.svg',
  THUNDERSTORM: './assets/img/weather-state/thunderstorm.svg',
};

const WEATHER_STATE = [
  {
    name: 'Thunderstorm',
    src: SRC_IMG.THUNDERSTORM,
    state: ['Thunderstorm'],
  },
  {
    name: 'Rain',
    src: SRC_IMG.RAIN,
    state: ['Drizzle', 'Rain'],
  },
  {
    name: 'Clouds',
    src: SRC_IMG.CLOUDS,
    state: ['Clouds'],
  },
  {
    name: 'Clear',
    src: SRC_IMG.CLEAR,
    state: ['Clear'],
  },
  {
    name: 'Snow',
    src: SRC_IMG.SNOW,
    state: ['Snow'],
  },
  {
    name: 'Mist',
    src: SRC_IMG.MIST,
    state: [
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

const MONTH = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export { API, WEATHER_STATE, EXTRA_VARIABLE, SRC_IMG, ERROR, MONTH };

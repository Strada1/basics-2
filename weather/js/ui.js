const ELEMENT = {
  BUTTONS: document.querySelectorAll('.tab-btn'),
  TABS_WEATHER: document.querySelectorAll('.tab'),
  FORM: document.querySelector('form'),
  LIKE: document.querySelector('.like'),
  ACTIVE_CITY_LIST: document.querySelectorAll('[class*="active-city"]'),
  TEMPERATURE: document.querySelectorAll('.temperature'),
  FEELS_LIKE: document.querySelector('.feels-like'),
  ICON: document.querySelector('.icon'),
  CURRENT_STATE: document.querySelector('.current-state'),
  SUNRISE: document.querySelector('.time-sunrise'),
  SUNSET: document.querySelector('.time-sunset'),
  ACTIVE_CITY: document.querySelector('.active-city'),
  FAVORITES_LIST: document.querySelector('.city-list-wrapper'),
  TAB_LIST_FORECAST: document.querySelector('.tab-list-forecast'),
};

const CLASS = {
  ACTIVE_BTN: 'active-btn',
  ACTIVE_TAB: 'active-tab',
  INACTIVE_TAB: 'inactive-tab',
  ACTIVE_LIKE: 'active-like',
  CITY: 'city',
  FORECAST_BLOCK: 'forecast-block',
  FORECAST_ITEM: 'forecast-item',
  FORECAST_DATE: 'forecast-date',
  FORECAST_TIME: 'forecast-time',
  FORECAST_TEMPERATURE: 'forecast-temperature',
  FORECAST_FEELS_LIKE: 'forecast-feels-like',
  FORECAST_STATE: 'forecast-state',
  ICON_ITEM: 'icon-item',
};

const CREATE_ELEMENT = {
  DIV: function () {
    return document.createElement('div');
  },
  LI: function () {
    return document.createElement('li');
  },
  SPAN: function () {
    return document.createElement('span');
  },
  IMG: function () {
    return document.createElement('img');
  },
};

export { ELEMENT, CLASS, CREATE_ELEMENT };

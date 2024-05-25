
const POINT_TYPES = [
  'taxi',
  'bus',
  'train',
  'ship',
  'drive',
  'flight',
  'check-in',
  'sightseeing',
  'restaurant',
];

const POINT_EMPTY = {
  id: crypto.randomUUID(),
  basePrice: 0,
  dateFrom: Date.now(),
  dateTo: Date.now(),
  destination: '',
  isFavorite: false,
  offers: [],
  type: POINT_TYPES[0]
};

const FilterType = {
  EVERYTHING: 'everything',
  PAST: 'past',
  PRESENT: 'present',
  FUTURE: 'future',
};

const SortType = {
  DAY: 'day',
  EVENT: 'event',
  TIME: 'time',
  PRICE: 'price',
  OFFERS: 'offers'
};

const ENABLED_SORT_TYPES = [
  SortType.DAY, SortType.TIME, SortType.PRICE
];


const UserAction = {
  UPDATE_POINT: 'UPDATE_POINT',
  ADD_POINT: 'ADD_POINT',
  DELETE_POINT: 'DELETE_POINT',
};

const UpdateType = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
  INIT: 'INIT',
};

const DEFAULT_TYPE = 'flight';

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING'
};

const BASE_POINT = {
  basePrice: 0,
  dateFrom: null,
  dateTo: null,
  destination: null,
  isFavorite: false,
  offers: [],
  type: DEFAULT_TYPE,
};

const TimeLimit = {
  LOWER_LIMIT: 350,
  UPPER_LIMIT: 1000,
};

const AUTHORIZATION = 'Basic qN3Fsq53cwa4xj3z2';
const END_POINT = 'https://21.objects.htmlacademy.pro/big-trip';


const Method = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE'
};


export {END_POINT,AUTHORIZATION,Method,TimeLimit ,Mode , BASE_POINT,UpdateType ,UserAction ,POINT_TYPES, POINT_EMPTY, FilterType, SortType, ENABLED_SORT_TYPES };

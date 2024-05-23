
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

const SortTypes = {
  DAY: 'day',
  EVENT: 'event',
  TIME: 'time',
  PRICE: 'price',
  OFFERS: 'offers'
};

const ENABLED_SORT_TYPES = [
  SortTypes.DAY, SortTypes.TIME, SortTypes.PRICE
];

const MODE = {
  EDITING: 'EDITING',
  CREATING: 'CREATING',
};

const USER_ACTION = {
  UPDATE_POINT: 'UPDATE_POINT',
  DELETE_POINT: 'DELETE_POINT',
  CREATE_POINT: 'CREATE_POINT',
};

const UPDATE_TYPES = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
};

const DEFAULT_TYPE = 'flight';

const BASE_POINT = {
  basePrice: 0,
  dateFrom: null,
  dateTo: null,
  destination: null,
  isFavorite: false,
  offers: [],
  type: DEFAULT_TYPE,
};


export { BASE_POINT, MODE,UPDATE_TYPES ,USER_ACTION ,POINT_TYPES, POINT_EMPTY, FilterType, SortTypes, ENABLED_SORT_TYPES };

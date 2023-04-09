const CANVAS_WIDTH = 1200;
const CANVAS_HEIGHT = 1000;
const CELL_HEIGHT = 40;
const CELL_WIDTH = 40;

const BATTLEFIELD_WIDTH = CELL_HEIGHT * 10;
const BATTLEFIELD_HEIGHT = CELL_WIDTH * 10;

const PREPARATION_SCREEN_START_FIELD_COORD_X = 10;
const PREPARATION_SCREEN_START_FIELD_COORD_Y = 300;

const BACKGROUND_COLOR_SHIP = '#B3B3B3';
const BORDER_COLOR_SHIP = '#818181';

const RADIUS = 10;


const shipDatas = [
  {
    id: 1,
    size: 4,
    direction: 'row',
    startPosition: {
      x: 565 + PREPARATION_SCREEN_START_FIELD_COORD_X,
      y: 290 + PREPARATION_SCREEN_START_FIELD_COORD_Y,
    },
    position: {
      x: 565 + PREPARATION_SCREEN_START_FIELD_COORD_X,
      y: 290 + PREPARATION_SCREEN_START_FIELD_COORD_Y,
    },
    cells: [],
    color: BACKGROUND_COLOR_SHIP,
    borderColor: BORDER_COLOR_SHIP,
  },
  {
    id: 2,
    size: 3,
    direction: 'row',
    startPosition: {
      x: 515 + PREPARATION_SCREEN_START_FIELD_COORD_X,
      y: 235 + PREPARATION_SCREEN_START_FIELD_COORD_Y,
    },
    position: {
      x: 515 + PREPARATION_SCREEN_START_FIELD_COORD_X,
      y: 235 + PREPARATION_SCREEN_START_FIELD_COORD_Y,
    },
    cells: [],
    color: BACKGROUND_COLOR_SHIP,
    borderColor: BORDER_COLOR_SHIP,

  },
  {
    id: 3,
    size: 3,
    direction: 'row',
    startPosition: {
      x: 665 + PREPARATION_SCREEN_START_FIELD_COORD_X,
      y: 235 + PREPARATION_SCREEN_START_FIELD_COORD_Y,
    },
    position: {
      x: 665 + PREPARATION_SCREEN_START_FIELD_COORD_X,
      y: 235 + PREPARATION_SCREEN_START_FIELD_COORD_Y,
    },
    cells: [],
    color: BACKGROUND_COLOR_SHIP,
    borderColor: BORDER_COLOR_SHIP,

  },
  {
    id: 4,
    size: 2,
    direction: 'row',
    startPosition: {
      x: 505 + PREPARATION_SCREEN_START_FIELD_COORD_X,
      y: 180 + PREPARATION_SCREEN_START_FIELD_COORD_Y,
    },
    position: {
      x: 505 + PREPARATION_SCREEN_START_FIELD_COORD_X,
      y: 180 + PREPARATION_SCREEN_START_FIELD_COORD_Y,
    },
    cells: [],
    color: BACKGROUND_COLOR_SHIP,
    borderColor: BORDER_COLOR_SHIP,

  },
  {
    id: 5,
    size: 2,
    direction: 'row',
    startPosition: {
      x: 611 + PREPARATION_SCREEN_START_FIELD_COORD_X,
      y: 180 + PREPARATION_SCREEN_START_FIELD_COORD_Y,
    },
    position: {
      x: 611 + PREPARATION_SCREEN_START_FIELD_COORD_X,
      y: 180 + PREPARATION_SCREEN_START_FIELD_COORD_Y,
    },
    cells: [],
    color: BACKGROUND_COLOR_SHIP,
    borderColor: BORDER_COLOR_SHIP,

  },
  {
    id: 6,
    size: 2,
    direction: 'row',
    startPosition: {
      x: 722 + PREPARATION_SCREEN_START_FIELD_COORD_X,
      y: 180 + PREPARATION_SCREEN_START_FIELD_COORD_Y,
    },
    position: {
      x: 722 + PREPARATION_SCREEN_START_FIELD_COORD_X,
      y: 180 + PREPARATION_SCREEN_START_FIELD_COORD_Y,
    },
    cells: [],
    color: BACKGROUND_COLOR_SHIP,
    borderColor: BORDER_COLOR_SHIP,

  },
  {
    id: 7,
    size: 1,
    direction: 'row',
    startPosition: {
      x: 545 + PREPARATION_SCREEN_START_FIELD_COORD_X,
      y: 125 + PREPARATION_SCREEN_START_FIELD_COORD_Y,
    },
    position: {
      x: 545 + PREPARATION_SCREEN_START_FIELD_COORD_X,
      y: 125 + PREPARATION_SCREEN_START_FIELD_COORD_Y,
    },
    cells: [],
    color: BACKGROUND_COLOR_SHIP,
    borderColor: BORDER_COLOR_SHIP,

  },
  {
    id: 8,
    size: 1,
    direction: 'row',
    startPosition: {
      x: 605 + PREPARATION_SCREEN_START_FIELD_COORD_X,
      y: 125 + PREPARATION_SCREEN_START_FIELD_COORD_Y,
    },
    position: {
      x: 605 + PREPARATION_SCREEN_START_FIELD_COORD_X,
      y: 125 + PREPARATION_SCREEN_START_FIELD_COORD_Y,
    },
    cells: [],
    color: BACKGROUND_COLOR_SHIP,
    borderColor: BORDER_COLOR_SHIP,

  },
  {
    id: 9,
    size: 1,
    direction: 'row',
    startPosition: {
      x: 665 + PREPARATION_SCREEN_START_FIELD_COORD_X,
      y: 125 + PREPARATION_SCREEN_START_FIELD_COORD_Y,
    },
    position: {
      x: 665 + PREPARATION_SCREEN_START_FIELD_COORD_X,
      y: 125 + PREPARATION_SCREEN_START_FIELD_COORD_Y,
    },
    cells: [],
    color: BACKGROUND_COLOR_SHIP,
    borderColor: BORDER_COLOR_SHIP,

  },
  {
    id: 10,
    size: 1,
    direction: 'row',
    startPosition: {
      x: 725 + PREPARATION_SCREEN_START_FIELD_COORD_X,
      y: 125 + PREPARATION_SCREEN_START_FIELD_COORD_Y,
    },
    position: {
      x: 725 + PREPARATION_SCREEN_START_FIELD_COORD_X,
      y: 125 + PREPARATION_SCREEN_START_FIELD_COORD_Y,
    },
    cells: [],
    color: BACKGROUND_COLOR_SHIP,
    borderColor: BORDER_COLOR_SHIP,

  },
];

export {
  CANVAS_WIDTH,
  CANVAS_HEIGHT,
  CELL_WIDTH,
  CELL_HEIGHT,
  RADIUS,
  shipDatas,
  BATTLEFIELD_WIDTH,
  BATTLEFIELD_HEIGHT,
};

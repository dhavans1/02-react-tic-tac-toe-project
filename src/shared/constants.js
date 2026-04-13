export const initPlayers = [
  {
    name: "Player 1",
    symbol: "X",
  },
  {
    name: "Player 2",
    symbol: "O",
  },
];

export const initGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export const winnerMatrix = [
  [
    {
      row: 0,
      col: 0,
    },
    {
      row: 0,
      col: 1,
    },
    {
      row: 0,
      col: 2,
    },
  ],
  [
    {
      row: 1,
      col: 0,
    },
    {
      row: 1,
      col: 1,
    },
    {
      row: 1,
      col: 2,
    },
  ],
  [
    {
      row: 2,
      col: 0,
    },
    {
      row: 2,
      col: 1,
    },
    {
      row: 2,
      col: 2,
    },
  ],
  [
    {
      row: 0,
      col: 0,
    },
    {
      row: 1,
      col: 0,
    },
    {
      row: 2,
      col: 0,
    },
  ],
  [
    {
      row: 0,
      col: 1,
    },
    {
      row: 1,
      col: 1,
    },
    {
      row: 2,
      col: 1,
    },
  ],
  [
    {
      row: 0,
      col: 2,
    },
    {
      row: 1,
      col: 2,
    },
    {
      row: 2,
      col: 2,
    },
  ],
  [
    {
      row: 0,
      col: 0,
    },
    {
      row: 1,
      col: 1,
    },
    {
      row: 2,
      col: 2,
    },
  ],
  [
    {
      row: 0,
      col: 2,
    },
    {
      row: 1,
      col: 1,
    },
    {
      row: 2,
      col: 0,
    },
  ],
];

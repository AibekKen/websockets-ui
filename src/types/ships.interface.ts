export interface AddShipsData         {
  gameId: number,
  ships: Ship[],
  indexPlayer: number, 
}

export interface StartGameData {
  ships: Ship[],
  indexPlayer: number, 
} 

interface Ship {
  position: {
      x: number,
      y: number,
  },
  direction: boolean,
  length: number,
  type: 'small'|'medium'|'large'|'huge',
}

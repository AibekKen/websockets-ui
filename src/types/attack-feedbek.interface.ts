export interface AttackFeedback{
  position:
  {
      x: number;
      y: number;
  };
  currentPlayer: number; /* id of the player in the current game */
  status: "miss"|"killed"|"shot";
}
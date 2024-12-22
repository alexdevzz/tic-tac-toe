import { WINNER_COMBOS } from '../constants.js'

export const checkWinner = (boardToCheack) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if (
      boardToCheack[a] &&
      boardToCheack[a] === boardToCheack[b] &&
      boardToCheack[a] === boardToCheack[c]
    ) {
      return boardToCheack[a]
    }
  }
  // si no hay ganador
  return null
}

export const checkEndGame = (newBoard) => {
  return newBoard.every((square) => square !== null)
}

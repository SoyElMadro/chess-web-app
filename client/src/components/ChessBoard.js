import React from "react";
import ChessSquare from "./ChessSquare";
import pieces from "../utils/ChessPieces";

const ChessBoard = () => {
  // Función para inicializar el estado del tablero con las piezas en sus posiciones iniciales
  const initializeBoard = () => {
    const board = [];

    for (let row = 0; row < 8; row++) {
      const boardRow = [];

      for (let col = 0; col < 8; col++) {
        let piece = null;

        if (row === 0) {
          piece =
            pieces.black[
              col === 0 || col === 7
                ? "rook"
                : col === 1 || col === 6
                ? "knight"
                : col === 2 || col === 5
                ? "bishop"
                : col === 3
                ? "queen"
                : "king"
            ];
        } else if (row === 1) {
          piece = pieces.black.pawn;
        } else if (row === 6) {
          piece = pieces.white.pawn;
        } else if (row === 7) {
          piece =
            pieces.white[
              col === 0 || col === 7
                ? "rook"
                : col === 1 || col === 6
                ? "knight"
                : col === 2 || col === 5
                ? "bishop"
                : col === 3
                ? "queen"
                : "king"
            ];
        }

        boardRow.push(piece);
      }

      board.push(boardRow);
    }

    return board;
  };

  const boardState = initializeBoard();

  const renderSquares = () => {
    const squares = [];

    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        squares.push(
          <ChessSquare
            key={`${row}-${col}`}
            row={row}
            col={col}
            piece={boardState[row][col]}
          />
        );
      }
    }

    return squares;
  };

  return (
    <div className="grid grid-cols-[repeat(8,50px)] grid-rows-[repeat(8,50px)]">
      {renderSquares()}
    </div>
  );
};

export default ChessBoard;

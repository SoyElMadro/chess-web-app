const ChessSquare = ({ row, col, piece }) => {
  return (
    <div
      className={`w-[50px] h-[50px] relative hover:cursor-grab active:cursor-grabbing ${
        (row + col) % 2 === 0 ? "bg-[#B88762]" : "bg-[#EDD6B0]"
      }`}
    >
      {piece && (
        <div className="chess-piece absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {piece}
        </div>
      )}
    </div>
  );
};

export default ChessSquare;

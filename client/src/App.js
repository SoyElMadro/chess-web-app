import ChessBoard from "./components/ChessBoard";

function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-semibold mt-4 mb-6">Chess Game</h1>
      <ChessBoard />
    </div>
  );
}

export default App;

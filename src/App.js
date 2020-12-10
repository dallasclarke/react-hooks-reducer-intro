import Parent from "./demo/Parent";
import Random from "./demo/Random";
import Counter from "./demo/Counter";
import CountContext from "./context/CountContext";
import "./App.css";

function App() {
  return (
    <CountContext>
      <Counter />
    </CountContext>
  );
}

export default App;

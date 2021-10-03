import "./App.css";
import Desktop from "./Components/TeamsDesktop";
import { ContextProvider } from "./Components/ContextProvider";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Desktop />
      </ContextProvider>
    </div>
  );
}

export default App;

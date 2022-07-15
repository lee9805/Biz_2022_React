import logo from "./logo.svg";
import "./App.css";
import "./w3css.css";
import TodoMain from "./comps/TodoMain";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>오늘 할일</h1>
      </header>
      <TodoMain />
    </div>
  );
}

export default App;

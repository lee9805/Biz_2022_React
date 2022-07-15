import "./App.css";
import "./w3css.css";
import TodoMain from "./comp/TodoMain";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>오늘 할 일</h1>
      </header>
      <TodoMain />
    </div>
  );
}

export default App;

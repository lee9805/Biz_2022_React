import logo from "./logo.svg";
import "./React.css";
import DietMain from "./comps/DietMain";

function React() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <DietMain />
    </div>
  );
}

export default React;

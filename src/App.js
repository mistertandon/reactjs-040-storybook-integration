import "./App.css";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

function App() {
  return (
    <div className="App">
      <Button variant="primary" />
      <Input size="medium" placeholder="enter username"/>
    </div>
  );
}

export default App;

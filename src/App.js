import './App.css';
import {Keypad} from 'ComponentLibrary.jsx'
function App() {
  const buttonsInKeypad =["Q","W","E","A","D","F","Z","X","C"]
  return (
    <>
    <Keypad buttons = {buttonsInKeypad} />
    </>
  );
}

export default App;

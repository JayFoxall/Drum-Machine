import './App.css';
import {Keypad} from './ComponentLibrary.jsx'
import { useState } from 'react';

function App() {
  const [pressedButton, setPressedButton] = useState()

  function KeypadButton(triggerKey, audioClip){
    this.triggerKey = triggerKey;
    this.audioClip = audioClip
  }

  const qButton = new KeypadButton("Q", "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3")
  const wButton = new KeypadButton("W", "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3")
  const eButton = new KeypadButton("E", "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3")
  const aButton = new KeypadButton("A", "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3")
  const sButton = new KeypadButton("S", "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3")
  const dButton = new KeypadButton("D", "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3")
  const zButton = new KeypadButton("Z", "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3")
  const xButton = new KeypadButton("X", "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3")
  const cButton = new KeypadButton("C", "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3")

  const buttonsInKeypad = [qButton,wButton,eButton,aButton,sButton,dButton,zButton,xButton,cButton]
  return (
    <div id="drum machine">
      <Keypad buttons = {buttonsInKeypad} />
      <p id = "display">
        the display goes here 
      </p>
    </div>
  );
}

export default App;

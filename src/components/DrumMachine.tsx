import React from "react";
import {Pad} from "../types/Pad";
import {DrumPad} from "./DrumPad";

interface IDrumMachineProps {}
  
  interface IDrumMachineState {
    pads: Pad[]
  }

const padsArr: Pad[] =[
    {key: 'Q', display: 'Q is pressed', soundPiano:'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3', soundDrum:'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'},
    {key: 'W', display: 'Chord-2', soundPiano:'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3', soundDrum: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'},
    {key: 'E', display: 'Chord-3', soundPiano:'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3', soundDrum: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'},
    {key: 'A', display: 'Shaker', soundPiano:'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3', soundDrum: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'},
    {key: 'S', display: 'Open-HH', soundPiano:'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3', soundDrum: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'},
    {key: 'D', display: 'Closed-HH', soundPiano:'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3', soundDrum: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'},
    {key: 'Z', display: 'Punchy-Kick', soundPiano:'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3', soundDrum: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'},
    {key: 'X', display: 'Side-Stick', soundPiano:'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3', soundDrum: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'},
    {key: 'c', display: 'Snare', soundPiano:'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3', soundDrum: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'}];

export class DrumMachine extends React.Component<IDrumMachineProps, IDrumMachineState> {
  constructor(props: IDrumMachineProps) {
      super(props);
      this.state = {pads: padsArr};
  }

  render() {
      console.log(this.state)
      return(
      <div id='drum-machine'>
      {
        this.state.pads.map((element,i) => {
          return(
            <div className='drum-pad'id={element.key+i}>
            <DrumPad key={element.key} pad = {element}/>
            </div>
          );
        })
      }
      </div>
      )
  }
}
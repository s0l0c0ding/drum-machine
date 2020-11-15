import React from "react";
import { Pad } from "../types/Pad";
import { DrumPad } from "./DrumPad";
import playSoundElement from '../utils/playSoundElement';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

interface IDrumMachineProps { }

interface IDrumMachineState {
  pads: Pad[],
  display: string,
  instrument: string
}

const padsArr: Pad[] = [
  { key: 'Q', display: 'Q is pressed', soundPiano: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3', soundDrum: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
  { key: 'W', display: 'Chord-2', soundPiano: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3', soundDrum: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
  { key: 'E', display: 'Chord-3', soundPiano: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3', soundDrum: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
  { key: 'A', display: 'Shaker', soundPiano: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3', soundDrum: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
  { key: 'S', display: 'Open-HH', soundPiano: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3', soundDrum: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
  { key: 'D', display: 'Closed-HH', soundPiano: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3', soundDrum: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
  { key: 'Z', display: 'Punchy-Kick', soundPiano: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3', soundDrum: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
  { key: 'X', display: 'Side-Stick', soundPiano: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3', soundDrum: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
  { key: 'C', display: 'Snare', soundPiano: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3', soundDrum: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' }];

export class DrumMachine extends React.Component<IDrumMachineProps, IDrumMachineState> {
  constructor(props: IDrumMachineProps) {
    super(props);
    this.state = { pads: padsArr, display: '###', instrument: 'soundDrum' };
  }

  getDisplyDataCallback = (data: string) => {
    this.setState({
      display: data
    });
    playSoundElement(data);
  }

  changeInstrument = () => {
    this.setState({
      instrument: this.state.instrument === 'soundDrum' ? 'soundPiano' : 'soundDrum'
    });
  }

  keyPressed = (event: any) => {
    const key = event.key.toUpperCase();
    if (padsArr.map(p => p.key).includes(key)) {
      this.getDisplyDataCallback(key);
    }
  }

  render() {
    return (
      <Card >
      <Container className=" mt-4 mb-4">
        <Row className="justify-content-md-center">
          <Col sm={3}>
            <p id='display'>
              {this.state.display}
            </p>
          </Col>
          <Col sm={{ span: 1, offset: 3 }}>
            <Button onClick={this.changeInstrument} variant="light">{this.state.instrument.substr(5)}</Button>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <div id='drum-machine' onKeyDown={this.keyPressed}>
            <Col sm={12}>
              <Container className='mt-2'>
                <Row>
                  {
                    this.state.pads.map((element, i) => {
                      return (
                        <Col sm={4} className="mt-2">
                          <div className='drum-pad' id={element.key + i}>
                            <DrumPad key={element.key}
                              pad={element}
                              parentCallback={this.getDisplyDataCallback}
                              instrument={this.state.instrument} />
                          </div>
                        </Col>
                      );
                    })
                  }
                </Row>
              </Container>
            </Col>
          </div>
        </Row>
      </Container>
      </Card>
    )
  }
}
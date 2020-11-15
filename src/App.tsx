import React from 'react';
import './App.css';
import { DrumMachine } from './components/DrumMachine';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className=" d-flex align-items-center min-vh-100">
        <Container>
      <Row className="justify-content-md-center">
      <Col sm={2}></Col>
      <Col sm={8}>
      <DrumMachine />
      </Col>
      <Col  sm={2}></Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;

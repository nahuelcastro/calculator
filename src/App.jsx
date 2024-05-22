import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'

function App() {
  return (
    <Router basename="/react-calculator">
            <Container fluid="md">
                <Row>
                    <h1>Drum Machine</h1>
                </Row>
            </Container>
    </Router>
  );
}

export default App;

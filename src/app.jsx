import React from "react";
import Todos from "./components/todos/index";
import { Container, Row, Col } from "reactstrap";

function App() {
  return (
    <Container className="my-3">
      <Row>
        <Col>
          <Todos />
        </Col>
      </Row>
    </Container>
  );
}

export default App;

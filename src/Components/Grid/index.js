import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/Row";
import "./style.css";
import SensorCard from "../SensorCard";

const Grid = () => {
  return (
    <Container className="GridContainer">
      <Row className="ColSensor">
        <Col xs={6} className="ColSensor">
          <SensorCard />
        </Col>
        <Col xs={6} className="ColSensor">
          <SensorCard />
        </Col>
      </Row>
      <Row className="ColSensor">
        <Col xs={6} className="ColSensor">
          <SensorCard />
        </Col>
        <Col xs={6} className="ColSensor">
          <SensorCard />
        </Col>
      </Row>
    </Container>
  );
};

export default Grid;

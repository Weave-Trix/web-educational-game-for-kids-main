import React from "react";
import { Row, Col, Card } from "react-bootstrap";

export default function ChoosingGameQuestion(props) {
  const TR_OBJECTS = {
    car: "car",
    banana: "banana",
    apple: "apple",
    boy: "boy",
    bicycle: "bicycle",
    cat: "cat",
    chicken: "chicken",
    cow: "cow",
    dog: "dog",
    fish: "fish",
    girl: "girl",
    hat: "hat",
    helicopter: "helicopter",
    kebab: "kebab",
    laptop: "laptop",
    meat: "meat",
    plant: "plant",
    plane: "plan",
    robot: "robot",
    ship: "ship",
    snake: "snake",
    strawberry: "strawberry",
    truck: "truck",
    tv: "tv",
    kebab: "tebab",
  };
  return (
    <div>
      <Col md={12}>
        <Card>
          <h1>
            To select, raise your index and middle finger into a '2' position{" "}
            <strong>"{TR_OBJECTS[props.questions.correct_object]}"</strong>{" "}
            choose.
          </h1>
          <br></br>
          <Row>
            <Col md={6}>
              <Card.Img
                className="mx-auto d-block"
                variant="center"
                src={props.firstObjectImage}
                style={{
                  height: "160px",
                  width: "80%",
                  border: props.firstObjectBorder,
                }}
              />
            </Col>
            <Col md={6}>
              <Card.Img
                className="mx-auto d-block"
                variant="center"
                src={props.secondObjectImage}
                style={{
                  height: "160px",
                  width: "60%",
                  border: props.secondObjectBorder,
                }}
              />
            </Col>
          </Row>
        </Card>
      </Col>
    </div>
  );
}

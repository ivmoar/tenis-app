import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Content() {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src="image1.jpg" />
            <Card.Body>
              <Card.Title>Image 1</Card.Title>
              <Card.Text>Details about image 1.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="image2.jpg" />
            <Card.Body>
              <Card.Title>Image 2</Card.Title>
              <Card.Text>Details about image 2.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="image3.jpg" />
            <Card.Body>
              <Card.Title>Image 3</Card.Title>
              <Card.Text>Details about image 3.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Content;
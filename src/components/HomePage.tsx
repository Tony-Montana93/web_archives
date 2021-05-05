import React, { Component } from 'react';
import '../App.css';
import { Jumbotron, Form, Button, Container, Row, Col } from 'react-bootstrap';
export default class HomePage extends Component {
    render() {
      return (
        <Container>
          <Row className='justify-content-center d-flex'>
            <Col lg={6} sm={12}>
            <div className='App'>
                <h1>Welcome to the HealthCare MarketPlace Education Center</h1>
            <p>Please sign in/up to access all the educational content</p>
            <Jumbotron>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember Me" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Jumbotron>
            </div>
            </Col>
          </Row>
        </Container>
        )
    }
}

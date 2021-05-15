import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const HomePage = (props: any) => {
  return (
    <div className="css">
      <Container fluid >
          <Row className='justify-content-center d-flex'>
          <Col lg={6} sm={12}>
                <h1>Welcome To The Internet Archives!</h1>
            <p><i>Explore billions of webpage snap shots saved over time</i></p>
                <Form>
                  <Form.Group controlId="searchUri">
                    <Form.Label>URL</Form.Label>
                    <Form.Control value={props.uri} onChange={event => props.onChange(event.target.value)} type="url" placeholder="Enter URL" />
                  </Form.Group>
                  <Form.Group controlId="searchDate">
                    <Form.Label>Date</Form.Label>
                    <Form.Control value={props.date} onChange={event => props.onChangeDate(event.target.value)} type="date" placeholder="Enter Date" />
                  </Form.Group>
                  <Button disabled={props.loading} onClick={event => props.search(event)} variant="primary" type="button">
                    Search
                  </Button>
            </Form>
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default HomePage
import React from 'react'
import { Drawer } from './Drawer'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Container, Col, Row } from 'reactstrap'
export const Body = () => {
    return (
        <Container>
            <h1 className="h2">Dashboard</h1>
            <Row xs='1'>
                <Col >
                    <Card className='col-md-3'>
                        <CardImg src="https://source.unsplash.com/random" alt="Card image cap" width='200' height='200' className='img-thumbnail' />
                        <CardBody>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </Col>


            </Row>




            <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group mr-2">
                    <button type="button" className="btn btn-sm btn-outline-secondary">
                        Share
                                    </button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">
                        Export
                                    </button>
                </div>
                <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary dropdown-toggle"
                >
                    <span data-feather="calendar"></span>
                                        This week
                                    </button>
            </div>
            <h2>Section title</h2>



        </Container>
    )
}

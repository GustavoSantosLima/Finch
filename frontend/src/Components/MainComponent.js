import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

class MainComponent extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs="12" md="12" sm="12" className="text-center m-1tbem">
                        <h1>Fintch</h1>
                        <h4>Simples sistema financeiro feito com Node.js as React.js</h4>
                        <Link className="btn bg-primary m-1lrem" to="/category">Categoria</Link>
                        <Link className="btn bg-primary" to="/bill">Conta</Link>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default MainComponent
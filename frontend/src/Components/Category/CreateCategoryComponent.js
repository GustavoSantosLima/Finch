import React, { Component } from 'react'
import { Container, Row, Col, Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { create } from './CategoryAPI'

class ListCategoryComponent extends Component {
    constructor(props) {
        super(props);

        this.state = { name: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        return this.setState({ name: e.target.value })
    }

    handleSubmit() {
        create(this.state.name).then(() => {
            this.props.history.push('/category');
        })
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col xs="12" md="12" sm="12">
                        <Form>
                            <FormGroup>
                                <Label>Nome:</Label>
                                <Input type="text" name="name" onChange={ this.handleChange } placeholder="Digite o nome da categoria..." />
                            </FormGroup>
                            <FormGroup>
                                <Button color="success" onClick={ this.handleSubmit }>Salvar</Button>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ListCategoryComponent
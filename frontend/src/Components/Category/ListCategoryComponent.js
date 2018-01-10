import React, { Component } from 'react'
import { Container, Row, Col, Button, Table } from 'reactstrap'
import { Link } from 'react-router-dom'
import { findAll, deleteById } from './CategoryAPI'

class ListCategoryComponent extends Component {
    constructor(props) {
        super(props);

        this.state = { categories: [] };
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        return findAll().then(data => this.setState({ categories: data.results }))
    }

    handleDelete(category) {
        deleteById(category._id).then(() => {
            return findAll().then(data => this.setState({ categories: data.results }))
        })
    }

    render() {
        let { categories } = this.state;

        return (
            <Container>
                <Row>
                    <Col className="m-1tbem" xs="12" md="12" sm="12">
                        <Link className="btn btn-primary" to="/category/add">Nova Categoria</Link>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" md="12" sm="12">
                        <Table>
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>

                            <tbody>
                                { categories.map((category, index) => (
                                    <tr key={ index }>
                                        <td>{ category.name }</td>
                                        <td>
                                            <Button color="danger" onClick={ () => this.handleDelete(category) }>Excluir</Button>
                                        </td>
                                    </tr>
                                )) }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ListCategoryComponent
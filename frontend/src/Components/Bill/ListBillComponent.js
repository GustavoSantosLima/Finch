import React, { Component } from 'react'
import { Container, Row, Col, Button, Table } from 'reactstrap'
import { Link } from 'react-router-dom'
import { findAll, deleteById } from './BillAPI'

class ListBillComponent extends Component {
    constructor(props) {
        super(props);

        this.state = { bills: [], category: '' };
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        return findAll().then(data => this.setState({ bills: data.results }));
    }

    handleDelete(bill) {
        deleteById(bill._id).then(() => {
            return findAll().then(data => this.setState({ bills: data.results }))
        })
    }

    render() {
        let { bills } = this.state;

        return (
            <Container>
                <Row>
                    <Col className="m-1tbem" xs="12" md="12" sm="12">
                        <Link className="btn btn-primary" to="/bill/add">Nova Conta</Link>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" md="12" sm="12">
                        <Table>
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Valor</th>
                                    <th>Tipo</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>

                            <tbody>
                                { bills.map((bill, index) => (
                                    <tr key={ index }>
                                        <td>{ bill.name }</td>
                                        <td>{ 'R$' + bill.value }</td>
                                        <td>{ bill.type }</td>
                                        <td>
                                            <Button color="danger" onClick={ () => this.handleDelete(bill) }>Excluir</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ListBillComponent
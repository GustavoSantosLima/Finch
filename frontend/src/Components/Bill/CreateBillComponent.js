import React, { Component } from 'react'
import { Container, Row, Col, Button, Form, FormGroup, Input, Label } from 'reactstrap'
import NumberFormat from 'react-number-format'
import { create } from './BillAPI'
import { findAll as findAllCategories } from './../Category/CategoryAPI'

class CreateBillComponent extends Component {
    constructor(props) {
        super(props);

        this.state = { name: '', value: 0.00, type: '', category: '', categories: [] };
        this.hendleChangeName = this.hendleChangeName.bind(this);
        this.hendleChangeValue = this.hendleChangeValue.bind(this);
        this.hendleChangeType = this.hendleChangeType.bind(this);
        this.hendleChangeCategory = this.hendleChangeCategory.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        return findAllCategories().then(data => this.setState({ categories: data.results }))
    }

    hendleChangeName(e) {
        return this.setState({
            name: e.target.value
        })
    }

    hendleChangeValue(e, values) {
        let { floatValue } = values;

        return this.setState({
            value: floatValue
        })
    }

    hendleChangeType(e) {
        return this.setState({
            type: e.target.value
        })
    }

    hendleChangeCategory(e) {
        return this.setState({
            category: e.target.value
        })
    }

    handleSubmit() {
        let { name, value, type, category } = this.state;

        create(name, value, type, category).then(() => {
            this.props.history.push('/bill')
        })
    }

    render() {
        let { categories } = this.state;

        return (
            <Container>
                <Row>
                    <Col xs="12" md="12" sm="12">
                        <Form>
                            <FormGroup>
                                <Label>Nome:</Label>
                                <Input type="text" name="name" placeholder="Digite o nome da conta..." onChange={ this.hendleChangeName } />
                            </FormGroup>
                            <FormGroup>
                                <Label>Valor:</Label>
                                <NumberFormat value={ this.state.value } className="form-control" thousandSeparator={true} prefix={'R$'} decimalPrecision={2} onChange={ this.hendleChangeValue } />
                            </FormGroup>
                            <FormGroup>
                                <Label>Tipo:</Label>
                                <Input type="select" name="select" onChange={ this.hendleChangeType }>
                                    <option value="-1" defaultValue="-1">Selecione o tipo...</option>
                                    <option value="ENTRADA">Entrada</option>
                                    <option value="SAIDA">Saída</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label>Categoria:</Label>
                                <Input type="select" name="select" onChange={ this.hendleChangeCategory }>
                                    <option value="-1" defaultValue="-1">Selecione a categoria...</option>
                                    { categories.map((category, index) => (
                                        <option value={ category._id } key={ index }>{ category.name }</option>
                                    ))}
                                </Input>
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

export default CreateBillComponent

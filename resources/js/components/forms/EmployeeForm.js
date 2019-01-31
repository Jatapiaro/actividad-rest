import React from 'react';
import { Button, Card, Form } from "tabler-react";
import CardHeader from '../CardHeader';
import CardCancelButton from '../CardCancelButton';

export default class EmployeeForm extends React.Component {

    /**
     * Renders the component
     */
    render() {
        return (
            <React.Fragment>
                <Form onSubmit={this.props.handleSubmit}>
                    <Card>
                        <CardHeader title={this.props.cardHeaderTitle}/>
                        <Card.Body>

                            <Form.Group
                                label="Nombre">
                                <Form.Input
                                    name="name"
                                    onChange={this.props.onValueChange}
                                    value={this.props.employee.name}
                                    error={this.props.getError('name')}
                                    />
                            </Form.Group>

                            <Form.Group
                                label="Salario">
                                <Form.Input
                                    name="salary"
                                    onChange={this.props.onValueChange}
                                    value={this.props.employee.salary}
                                    error={this.props.getError('salary')}/>
                            </Form.Group>

                        </Card.Body>
                        <Card.Footer>
                            <div className="d-flex">
                                <CardCancelButton />
                                <Button
                                    type="submit"
                                    color="primary"
                                    className="ml-auto">
                                    {this.props.footerButtonTitle}
                                </Button>
                            </div>
                        </Card.Footer>
                    </Card>
                </Form>
            </React.Fragment>
        );
    }

}

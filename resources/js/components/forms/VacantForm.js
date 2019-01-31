import React from 'react';
import { Button, Card, Form } from "tabler-react";
import CardHeader from '../CardHeader';
import CardCancelButton from '../CardCancelButton';

export default class VacantForm extends React.Component {

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
                                label="Nombre de la vacante">
                                <Form.Input
                                    name="name"
                                    onChange={this.props.onValueChange}
                                    value={this.props.vacant.name}
                                    error={this.props.getError('name')}
                                    />
                            </Form.Group>

                            <Form.Group
                                label="Descripción de la vacante">
                                <Form.Textarea
                                    name="description"
                                    onChange={this.props.onValueChange}
                                    value={this.props.vacant.description}
                                    error={this.props.getError('description')}/>
                            </Form.Group>

                            <Form.Group
                                label="Salario de la vacante">
                                <Form.Input
                                    name="salary"
                                    onChange={this.props.onValueChange}
                                    value={this.props.vacant.salary}
                                    error={this.props.getError('salary')}/>
                            </Form.Group>

                            <Form.Group
                                label="Beneficios de la vacante">
                                <Form.Textarea
                                    name="benefits"
                                    onChange={this.props.onValueChange}
                                    value={this.props.vacant.benefits}
                                    error={this.props.getError('benefits')}/>
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

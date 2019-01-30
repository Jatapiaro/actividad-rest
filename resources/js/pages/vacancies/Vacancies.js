import React from 'react';
import { Button, Card, Dropdown, Table } from "tabler-react";
import { toast } from 'react-toastify';
import CardHeader from '../../components/CardHeader';

export default class Vacancies extends React.Component {

    state = {
        vacancies: []
    }

    constructor(props) {
        super(props);
        this.columns = ['ID', 'Nombre', 'Descripcion', 'Salario', 'Beneficios'];
    }

    /**
     * Called when the component is going to be mounted
     */
    componentWillMount() {
        this.props.vacantService.all()
            .then((res) => {
                this.setState({vacancies: res});
            })
            .catch((err) => {
                toast.error('¡Hubo un problema al cargar las vacantes!, por favor, recarga la página');
            });
    }

    /**
     * Renders the component
     */
    render() {
        return (
            <div className="container">
                <Card isFullscreenable={true}>
                    <CardHeader
                        title={"Vacantes"}
                        redirectLink={"/vacancies/create"}/>
                    <Card.Body>
                        <Table>
                            <Table responsive={true}>
                                <Table.Header>
                                    {
                                        this.columns.map((col, index) =>
                                            <Table.ColHeader key={index}>
                                                {col}
                                            </Table.ColHeader>
                                        )
                                    }
                                </Table.Header>
                                <Table.Body>
                                    {
                                        this.state.vacancies.map((v, i) =>
                                            <Table.Row key={i}>
                                                <Table.Col>{v.id}</Table.Col>
                                                <Table.Col>{v.name}</Table.Col>
                                                <Table.Col>{v.description}</Table.Col>
                                                <Table.Col>{v.salary}</Table.Col>
                                                <Table.Col>{v.benefits}</Table.Col>
                                            </Table.Row>
                                        )
                                    }
                                </Table.Body>
                            </Table>
                        </Table>
                    </Card.Body>
                </Card>
            </div>
        );
    }

}

import React from 'react';
import { Card, Dropdown, Table } from "tabler-react";
import { toast } from 'react-toastify';
import CardHeader from '../../components/CardHeader';
import Modal, { ConfirmModal } from 'react-bootstrap4-modal';

export default class Vacancies extends React.Component {

    state = {
        vacancies: [],
        modal: {
            visible: false,
            vacant: {}
        },
    }

    constructor(props) {
        super(props);
        this.columns = ['ID', 'Nombre', 'Descripcion', 'Salario', 'Beneficios', 'Acciones'];
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
     * Handles the cancelation of a delete
     */
    handleCancelDelete = () => {
        this.setState({
            modal: {
                visible: false,
                vacant: {}
            }
        });
    }

    /**
     * Handles the confirmation of a delete
     */
    handleConfirmDelete = () => {
        const index = this.state.modal.index;
        let vacancies = this.state.vacancies;
        this.props.vacantService.delete(this.state.modal.vacant.id)
            .then(res => {
                vacancies.splice(index, 1);
                this.setState({
                    modal: {
                        visible: false,
                        vacant: {}
                    },
                    vacancies: vacancies
                });
                toast.success("¡Se ha eliminado correctamente el elemento!");
            })
            .catch(err => {
                toast.error('¡No se pudo eliminar la vacante! Intentalo de nuevo');
                this.setState({
                    modal: {
                        visible: false,
                        vacant: {}
                    }
                });
            });
    }

    /**
     * Handles the delete option
     * @param {*} index of the element to delete
     */
    showDeleteModal = (index) => {
        const vacant = this.state.vacancies[index];
        this.setState({
            modal: {
                visible: true,
                vacant: vacant,
                index: index
            }
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
                                                <Table.Col>${v.salary}</Table.Col>
                                                <Table.Col>{v.benefits}</Table.Col>
                                                <Table.Col>
                                                    <Dropdown
                                                        type="button"
                                                        color="success"
                                                        triggerContent="Acciones"
                                                        items={[
                                                            <Dropdown.Item
                                                                key={1}
                                                                onClick={() => {this.props.history.push(`/vacancies/${v.id}/edit`)}}>
                                                                <i className="fe fe-edit-2" />
                                                                <span>Editar</span>
                                                            </Dropdown.Item>,
                                                            <Dropdown.Item
                                                                key={2}
                                                                onClick={() => {this.showDeleteModal(i)}}>
                                                                <i className="fe fe-trash-2" />
                                                                <span>Borrar</span>
                                                            </Dropdown.Item>
                                                        ]}
                                                    />
                                                </Table.Col>
                                            </Table.Row>
                                        )
                                    }
                                </Table.Body>
                            </Table>
                        </Table>
                    </Card.Body>
                </Card>
                <Modal
                    visible={this.state.modal.visible}
                    onClickBackdrop={this.handleCancelDelete}>
                    <div className="modal-header">
                        <h5 className="modal-title">
                            ¿Estás seguro de eliminar la vacante?
                        </h5>
                    </div>
                    <div className="modal-body">
                        <p>
                            <strong>Nombre: </strong> {this.state.modal.vacant.name || '' }
                        </p>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={this.handleCancelDelete}>
                            Cancelar
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={this.handleConfirmDelete}>
                            Sí, eliminar.
                        </button>
                    </div>
                </Modal>
            </div>
        );
    }

}

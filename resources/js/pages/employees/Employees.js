import React from 'react';
import { Card, Dropdown, Table } from "tabler-react";
import { toast } from 'react-toastify';
import CardHeader from '../../components/CardHeader';
import Modal, { ConfirmModal } from 'react-bootstrap4-modal';

export default class Employees extends React.Component {

    state = {
        employees: [],
        modal: {
            visible: false,
            employee: {}
        },
    }

    constructor(props) {
        super(props);
        this.columns = ['ID', 'Nombre', 'Salario', 'Acciones'];
    }

    /**
     * Called when the component is going to be mounted
     */
    componentWillMount() {
        this.props.employeeService.all()
            .then((res) => {
                this.setState({employees: res});
            })
            .catch((err) => {
                toast.error('¡Hubo un problema al cargar los empleados!, por favor, recarga la página');
            })
    }

    /**
     * Handles the cancelation of a delete
     */
    handleCancelDelete = () => {
        this.setState({
            modal: {
                visible: false,
                employee: {}
            }
        });
    }

    /**
     * Handles the confirmation of a delete
     */
    handleConfirmDelete = () => {
        const index = this.state.modal.index;
        let employees = this.state.employees;
        this.props.employeeService.delete(this.state.modal.employee.id)
            .then(res => {
                employees.splice(index, 1);
                this.setState({
                    modal: {
                        visible: false,
                        empoyee: {}
                    },
                    employees: employees
                });
                toast.success("¡Se ha eliminado correctamente el elemento!");
            })
            .catch(err => {
                toast.error('¡No se pudo eliminar el empleado! Intentalo de nuevo');
                this.setState({
                    modal: {
                        visible: false,
                        employee: {}
                    }
                });
            });
    }

    /**
     * Handles the delete option
     * @param {*} index of the element to delete
     */
    showDeleteModal = (index) => {
        const employee = this.state.employees[index];
        this.setState({
            modal: {
                visible: true,
                employee: employee,
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
                            title={"Empleados"}
                            redirectLink={"/employees/create"}/>
                    <Card.Body>
                        <Table>
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
                                    this.state.employees.map((e, i) =>
                                        <Table.Row key={i}>
                                            <Table.Col>{e.id}</Table.Col>
                                            <Table.Col>{e.name}</Table.Col>
                                            <Table.Col>${e.salary}</Table.Col>
                                            <Table.Col>
                                                <Dropdown
                                                    type="button"
                                                    color="success"
                                                    triggerContent="Acciones"
                                                    items={[
                                                        <Dropdown.Item
                                                            key={1}
                                                            onClick={() => {this.props.history.push(`/employees/${e.id}/edit`)}}>
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
                            <strong>Nombre: </strong> {this.state.modal.employee.name || '' }
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

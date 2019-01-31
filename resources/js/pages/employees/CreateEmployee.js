import React from 'react';
import Employee from '../../models/Employee';
import { toast } from 'react-toastify';
import EmployeeForm from '../../components/forms/EmployeeForm';

export default class CreateEmployee extends React.Component {

    state = {
        employee: new Employee(),
        errors: {}
    }

    /**
     * Get the error related to an input
     * @param {*} key
     */
    getError = (key) => {
        let response = null;
        if (this.state.errors[key]) {
            response = '';
            this.state.errors[key].forEach((message) => {
                response += message;
            });
        }
        return response;
    }

    /**
     * Handles the form submission
     */
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.employeeService.store(this.state.employee)
            .then(res => {
                this.props.history.push("/employees");
                toast.success('Se ha creado el empleado correctamente');
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    errors: err.errors
                });
                toast.error('Tienes errores en el formulario, por favor, revísalo');
            });
    }

    /**
     * Handles the change of a value on some input
     */
    onValueChange = (e) => {
        let employee = this.state.employee;
        employee[e.target.name] = e.target.value;
        this.setState({
            employee: employee
        });
    }

    /**
     * Renders the component
     */
    render() {
        return (
            <div className="container">
                <EmployeeForm
                    getError={this.getError}
                    handleSubmit={this.handleSubmit}
                    onValueChange={this.onValueChange}
                    employee={this.state.employee}
                    cardHeaderTitle={"Crear empleado"}
                    footerButtonTitle={"Guardar empleado"}
                />
            </div>
        );
    }

}

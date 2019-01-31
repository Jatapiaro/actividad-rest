import React from 'react';
import Employee from '../../models/Employee';
import { toast } from 'react-toastify';
import EmployeeForm from '../../components/forms/EmployeeForm';

export default class EditEmployee extends React.Component {

    state = {
        employee: new Employee(),
        errors: {}
    }

    /**
     * Called when the component is going to be rendered
     */
    componentWillMount() {
        const id = this.props.match.params.id;
        this.props.employeeService.show(id)
            .then((res) => {
                let employee = this.state.employee;
                employee.fillFromResponseData(res);
                this.setState({employee: employee});
            })
            .catch((err) => {
                console.log(err);
                toast.error('¡Hubo un error al cargar el elemento!');
            });
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
        this.props.employeeService.update(this.state.employee)
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
                    cardHeaderTitle={"Editar empleado"}
                    footerButtonTitle={"Editar empleado"}
                />
            </div>
        );
    }

}

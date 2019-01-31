import React from 'react';
import Vacant from '../../models/Vacant';
import VacantForm from '../../components/forms/VacantForm';
import { toast } from 'react-toastify';

export default class EditVacant extends React.Component {

    state = {
        vacant: new Vacant(),
        errors: {}
    }

    /**
     * Called when the component is going to be rendered
     */
    componentWillMount() {
        const id = this.props.match.params.id;
        this.props.vacantService.show(id)
            .then((res) => {
                let vacant = this.state.vacant;
                vacant.fillFromResponseData(res);
                this.setState({vacant: vacant});
            })
            .catch((err) => {
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
        this.props.vacantService.update(this.state.vacant)
            .then(res => {
                this.props.history.push("/vacancies");
                toast.success('Se ha actualizado la vacante correctamente');
            })
            .catch(err => {
                /*this.setState({
                    errors: err.errors
                });*/
                console.log(err);
                toast.error('Tienes errores en el formulario, por favor, revísalo');
            });
    }

    /**
     * Handles the change of a value on some input
     */
    onValueChange = (e) => {
        let vacant = this.state.vacant;
        vacant[e.target.name] = e.target.value;
        this.setState({
            vacant: vacant
        });
    }

    /**
     * Renders the component
     */
    render() {
        return (
            <div className="container">
                <VacantForm
                    getError={this.getError}
                    handleSubmit={this.handleSubmit}
                    onValueChange={this.onValueChange}
                    vacant={this.state.vacant}
                    cardHeaderTitle={"Editar vacante"}
                    footerButtonTitle={"Editar vacante"}
                />
            </div>
        );
    }

}

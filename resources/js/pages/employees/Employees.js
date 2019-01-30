import React from 'react';

export default class Employees extends React.Component {

    /**
     * Called when the component is going to be mounted
     */
    componentWillMount() {
        this.props.employeeService.all()
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    /**
     * Renders the component
     */
    render() {
        return (
            <div className="container">
                <h1>¡Estamos en Employees!</h1>
            </div>
        );
    }

}

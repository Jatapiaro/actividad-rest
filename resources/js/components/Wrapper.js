import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

// Componentes
import TopHeader from './TopHeader';
import NavLink from './../models/NavLink';
import Navbar from './Navbar';

// Pages
import Home from '../pages/Home';
import Vacancies from '../pages/vacancies/Vacancies';
import Employees from '../pages/employees/Employees';

// Services
import HttpService from '../services/HttpService';
import EmployeeService from '../services/EmployeeService';
import VacantService from '../services/VacantService';

// Toast
import { ToastContainer } from 'react-toastify';
import CreateVacant from '../pages/vacancies/CreateVacant';
import EditVacant from '../pages/vacancies/EditVacant';

export default class Wrapper extends React.Component {

    state = {
        isCollapsedMenuOpen: false,
    }

    constructor(props) {
        super(props);
        this.navLinks = [
            new NavLink("Empleados", "fa fa-users", "/employees"),
            new NavLink("Vacantes", "fa fa-suitcase", "/vacancies"),
        ];
        this.httpService = new HttpService();
        this.employeeService = new EmployeeService(this.httpService);
        this.vacantService = new VacantService(this.httpService);
    }

    /**
     * Renders the component
     */
    render() {
        return (
            <div>
                <TopHeader toggleCollapsedMenu={this.toggleCollapsedMenu}/>
                <Navbar navlinks={this.navLinks} isCollapsedMenuOpen={this.state.isCollapsedMenuOpen}/>
                <BrowserRouter>
                    <div className="content">
                        <Switch>
                            <Route path="/" component={Home} exact={true} />
                            {/* ============= Employees =========== */}
                            <Route
                                path="/employees"
                                render={(props) =>
                                    <Employees
                                        employeeService={this.employeeService}
                                        {...props}/>
                                }
                                exact={true} />
                            {/* ============= Vacancies =========== */}
                            <Route
                                path="/vacancies"
                                render={(props) =>
                                    <Vacancies
                                        vacantService={this.vacantService}
                                        {...props}/>
                                }
                                exact={true} />
                            <Route
                                path="/vacancies/create"
                                render={(props) =>
                                    <CreateVacant
                                        vacantService={this.vacantService}
                                        {...props}/>
                                }
                                exact={true} />
                            <Route
                                path="/vacancies/:id/edit"
                                render={(props) =>
                                    <EditVacant
                                        vacantService={this.vacantService}
                                        {...props}/>
                                }
                                exact={true} />
                        </Switch>
                    </div>
                </BrowserRouter>
                <ToastContainer />
            </div>
        );
    }

    /**
     * Toggles the collapsed menu
     */
    toggleCollapsedMenu = () => {
        this.setState((prevState) => {
            return {
                isCollapsedMenuOpen: !prevState.isCollapsedMenuOpen
            }
        })
    }

}

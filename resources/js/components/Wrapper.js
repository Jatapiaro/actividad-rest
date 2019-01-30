import React from 'react';
import TopHeader from './TopHeader';
import NavLink from './../models/NavLink';
import Navbar from './Navbar';

export default class Wrapper extends React.Component {

    state = {
        isCollapsedMenuOpen: false,
    }

    constructor(props) {
        super(props);
        this.navLinks = [
            new NavLink("Empleados", "fa fa-users", "/employees"),
            new NavLink("Vacantess", "fa fa-suitcase", "/vacancies"),
        ];
    }

    render() {
        return (
            <div>
                <TopHeader toggleCollapsedMenu={this.toggleCollapsedMenu}/>
                <Navbar navlinks={this.navLinks} isCollapsedMenuOpen={this.state.isCollapsedMenuOpen}/>
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

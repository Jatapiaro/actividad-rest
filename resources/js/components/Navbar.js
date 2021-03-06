import React from 'react';

export default class Navbar extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="custom-navbar">
                <div className={`header collapse d-lg-flex p-0 ${(this.props.isCollapsedMenuOpen)? 'show' : ''}`}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg order-lg-first">
                                <ul className="nav nav-tabs border-0 flex-column flex-lg-row">

                                    {
                                        this.props.navlinks.map((n, index) =>
                                            <li key={index} className="nav-item">
                                                <a
                                                    href={n.route}
                                                    className={`nav-link ${(n.isActive()) ? 'active' : ''}`}
                                                >
                                                <i className={n.getIcon()}></i>
                                                    {n.name}
                                                </a>
                                            </li>
                                        )
                                    }

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

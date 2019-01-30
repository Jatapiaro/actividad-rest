import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Wrapper from './Wrapper';

export default class Example extends Component {
    render() {
        return (
            <Wrapper />
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Example />, document.getElementById('app'));
}

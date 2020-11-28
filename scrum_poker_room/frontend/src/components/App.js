import React, { Component } from 'react'

import { render } from 'react-dom'
import Homepage from './Homepage';
import Footer from './Footer';

export default class App extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
        <div>
            <Homepage title="Scrum Poker"/>
            <Footer />
        </div>
        );
    }
}

const appDiv = document.getElementById("app");
render(<App/>, appDiv)
import React, { Component } from 'react'

import { render } from 'react-dom'
import Homepage from './Homepage';
import Footer from './Footer';

export default class App extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return <p><Homepage title="Scrum Poker"/><Footer/></p>
    }
}

const appDiv = document.getElementById("app");
render(<App/>, appDiv)
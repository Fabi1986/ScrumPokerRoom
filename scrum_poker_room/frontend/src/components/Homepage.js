import React, {Component} from 'react'

export default class Homepage extends React.Component {

    constructor(props) {
        super(props)
    }

    render () {
        return <h1>{this.props.title}</h1>;
    }
}

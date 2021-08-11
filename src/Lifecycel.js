import React, { Component } from 'react'

export default class Lifecycel extends Component {
    constructor() {
        super();
        console.log('constructor');
    }
    componentDidMount() {

        console.log('componenrDidMount');
    }
    render() {
        console.log('reander');
        return (
            <div>
                <h3>{this.props.text.name}</h3>
            </div>
        )
    }
}

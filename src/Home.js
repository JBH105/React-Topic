import React from 'react'

export default class Home extends React.Component {
    //state methode
    constructor() {
        super();
        this.state = {
            name: 'Jaydeep',
            email: 'abc@gmail.com',
            count: 0

        }
    }

    update() {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        console.warn('render');
        return (
            <div>
                <h3>Name: {this.state.name}</h3>
                <h3>Email: {this.state.email}</h3>
                <h3>Count :{this.state.count}</h3>
                <span>
                <button onClick={() => { this.update() }}>Update</button>
                </span>
            </div>
        )
    }
}
 
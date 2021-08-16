import React, { Component } from 'react'
import { Button,Modal } from 'react-bootstrap'
export default class UseModel extends Component {
    constructor(){
        super()
        this.state={
            show:false
        }
    }
    handelModel(){
        this.setState({show:!this.state.show})
    }
    render() {

        return (
            <div>
            <button onClick={()=>{this.handelModel()}}>Click me</button>

            <Modal show={this.state.show} onHide={()=>{this.handelModel()}} >
                <Modal.Header closeButton>Model Header</Modal.Header>
                <Modal.Body>Model Body</Modal.Body>
                <Modal.Footer>
                    <Button onClick={()=>{this.handelModel()}}>Close</Button>
                    <Button onClick={()=>{this.handelModel()}}>Save</Button>

                </Modal.Footer>
            </Modal>
            </div>
   
        )
    }
}
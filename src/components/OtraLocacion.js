
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


import React, { Component } from 'react'

export default class OtraLocacion extends Component {
    constructor(props) {
        super(props)

        this.state = {
            latitude: "0",
            longitude: "0",
            err_msg:""
        }
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    handleOnChange(e) {
        let value = e.target.value
        let isGoodNumRegex = /^[-]*\d+[.]*\d*$/
        if (value === "-") {
            value = "-"
        }

        if (value.search(isGoodNumRegex) === -1 && value !== '-') {
            value = ""
        }

        let key = e.target.id
        let stateToUpdate = {}
        stateToUpdate[key] = value
        this.setState(stateToUpdate)
    }
    handleClick() {

        let latitude = parseFloat(this.state.latitude)
        let longitude = parseFloat(this.state.longitude)
        if(latitude<-90||latitude>90){
            this.setState({
                err_msg:"wrong latitude value"
            })
            return
        }else if(longitude<-180||longitude>180){
            this.setState({
                err_msg:"wrong longitude value"
            })
            return
        }else if(isNaN(latitude)||isNaN(longitude)){
            this.setState({
                err_msg:"null value"
            })
            return
        }
        else{
            let location={
                latitude,
                longitude
            }
            this.setState({
                err_msg:""
            },()=>this.props.onSearch(location))
            
        }

        
    }

    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.onHide}>
                    <Modal.Header>
                        <Modal.Title>New Location</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <label>latitude: </label>
                        <input type="text"
                            value={this.state.latitude}
                            id="latitude"
                            onChange={this.handleOnChange}
                        />
                        <br />
                        <label>longitude: </label>
                        <input type="text"
                            value={this.state.longitude}
                            id="longitude"
                            onChange={this.handleOnChange}

                        />
                    </Modal.Body>
                    <Modal.Footer>
                   <span className="text-danger"> {this.state.err_msg}</span>
                        <Button
                            onClick={this.handleClick}
                        >Seach!</Button>
                        <Button
                            variant="danger"
                            onClick={this.props.onHide}
                        >close</Button>
                       
                    </Modal.Footer>

                </Modal>

            </div>
        )
    }
}

import React, { Component } from 'react'
import { tarjetas_transparentes } from '../otos_estilos'

export default class Nubes extends Component {
    
    render() {
        return (
            <div
            style={tarjetas_transparentes}
            >
            <h2>{this.props.data.main}</h2>
            <p>Description: {this.props.data.description}</p>
            <p><b>visibility</b>: {this.props.visibility}mt</p>
            <p><b>clouds</b>: {this.props.clouds}%</p>
            <img src={this.props.data.icon} alt="air icon"/>

                
            </div>
        )
    }
}



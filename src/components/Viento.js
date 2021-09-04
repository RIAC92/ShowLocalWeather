import React, { Component } from 'react'
import airsvg from './air.svg'
import { tarjetas_transparentes } from '../otos_estilos'
export default class Viento extends Component {
   
    render() {
        return (
            <div
                style= {tarjetas_transparentes}
            >
                <h2>Wind</h2>
                    <p><b>speed:</b> {this.props.data.speed} mt/s</p>
                    <p><b>degree:</b> {this.props.data.deg}º</p>
                    <p><b>gust:</b> {this.props.data.gust} mt/s</p>            
                
                <img src={airsvg} width="100" height="100" alt="air icon"/>
                

            </div>
        )
    }
}



import React, { Component } from 'react'
import { tarjetas_transparentes } from '../otos_estilos'


export default class Localidad extends Component {
   constructor(props) {
       super(props)
   
       this.segToDate=this.segToDate.bind(this)
   }
   
  segToDate(seg){
    let time =parseInt(seg)*1000
    let hour=(new Date(time)).toLocaleTimeString();
    return hour 
}

    render() {
        
        return (
            <div
                style={tarjetas_transparentes}
            >
                <h2>Location</h2>
                    <p><b>Country:</b> {this.props.data.country}</p>
                    <p><b>Location:</b> {this.props.location}</p>
                    <p><b>latitud:</b> {this.props.latitud}</p>
                    <p><b>longitud:</b> {this.props.longitud}</p> 
                    <p><b>Sun rise hour:</b> {this.segToDate(this.props.data.sunrise)}</p>
                    <p><b>Sun set hour:</b> {this.segToDate(this.props.data.sunset)}</p> 
            </div>
        )
    }
}


import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Nubes from './Nubes'
import Viento from './Viento'
import Temperatura from './Temperatura'
import Localidad from './Localidad'
import cielo10 from '../imagenes/cielo10.jpg'
import cielo30 from '../imagenes/cielo30.jpg'
import cielo50 from '../imagenes/cielo50.jpg'
import cielo70 from '../imagenes/cielo70.jpg'
import cielo90 from '../imagenes/cielo90.jpg'
import OtraLocacion from './OtraLocacion'
import Acerca from './Acerca'

export default class Geolocation extends Component {
    constructor(props) {
        super(props)

        this.state = {
            longitud: 0,
            latitud: 0,
            show_other_location:false,
            show_aboutIt:false,
            weather_info: {
                weather: [
                    { icon: "" }
                ],
                wind: {},
                main: {},
                clouds: {},
                sys: {}
            }
        }
        this.geoSuccess = this.geoSuccess.bind(this);
        this.handleShowOtherLocation=this.handleShowOtherLocation.bind(this)
        this.handleSearch=this.handleSearch.bind(this)
        this.handleShowAboutIt=this.handleShowAboutIt.bind(this)
    }//end constructor

    componentDidMount() {
        let body =document.getElementsByTagName('body')
        body[0].classList.add("bg-secondary")
        if (!navigator.geolocation) {
            alert('Su navegador no soporta la funcñon de geolocalización')
            return;
        }

        function geoError() {
            alert('informacion no disponible')
            this.getWeatherInfo()
        };

        navigator.geolocation.getCurrentPosition(this.geoSuccess, geoError);
    }

    geoSuccess(position) {
        let latitud = position.coords.latitude;
        let longitud = position.coords.longitude;
        this.setState({
            latitud: latitud,
            longitud: longitud
        })
        this.getWeatherInfo()
    };//end geoSuccess

    getWeatherInfo() {
        let latitud = this.state.latitud
        let longitud = this.state.longitud
        let url = `https://weather-proxy.freecodecamp.rocks/api/current?lat=${latitud}&lon=${longitud}`
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'aplication/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                this.setState({ weather_info: data })
            })
            .catch(err => {
                console.error(err)
                alert('Ha ocurrido un problema, no se ha podido obtener la información correspondiente,\n posiblemnete por un fallo en la conexión')
            })

    }//end getWeatherInfo()
    
    chooseCloudImage(visibility){
        if(visibility>=0 && visibility <=20){
            return cielo10
        }else if(visibility>20 && visibility <=40){
            return cielo30
        }else if(visibility>40 && visibility <=60){
            return cielo50
        }else if(visibility>60 && visibility <=80){
            return cielo70
        }else if(visibility>80 && visibility <=100){
            return cielo90
        }
    }
    handleShowOtherLocation(){
        this.setState({
            show_other_location:!this.state.show_other_location
        })
    }

    handleSearch(location){
        this.setState({
            longitud:location.longitude,
            latitud:location.latitude
        },()=>{this.getWeatherInfo()})
    }
    handleShowAboutIt(){
        this.setState({
            show_aboutIt:!this.state.show_aboutIt
        })
    }


    render() {
        return (
            <div style={{
                'backgroundImage': 'url('+this.chooseCloudImage(this.state.weather_info.clouds.all)+')'
            }}>
            <Button onClick={this.handleShowAboutIt}>About it!</Button>
            {' '}
            <Button onClick={this.handleShowOtherLocation}>Other location?</Button>
            <OtraLocacion
                show={this.state.show_other_location}
                onHide={this.handleShowOtherLocation}
                onSearch={this.handleSearch}
            />
            <Acerca
                show={this.state.show_aboutIt}
                onHide={this.handleShowAboutIt}
            />
            <h1
            style={{
                'marginTop':'40px',
                'marginBottom':'50px'
            }}
            > Local Weather</h1>
                <Container fluid="md" className="text-white">
                    <Row xs={1} sm={1} md={3} lg={3}>
                        <Col></Col>
                        <Col>
                            <Nubes
                                data={this.state.weather_info.weather[0]}
                                clouds={this.state.weather_info.clouds.all}
                                visibility={this.state.weather_info.visibility}
                            />
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col>
                            <Viento
                                data={this.state.weather_info.wind}
                            />
                        </Col>
                        <Col>
                            <Temperatura
                                data={this.state.weather_info.main}
                            />
                        </Col>
                        <Col>
                            <Localidad
                                data={this.state.weather_info.sys}
                                location={this.state.weather_info.name}
                                latitud={this.state.latitud}
                                longitud={this.state.longitud}

                            />
                        </Col>
                    </Row>

                </Container>
            </div>
        )
    }
}

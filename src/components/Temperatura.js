import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { tarjetas_transparentes } from '../otos_estilos'

export default class Temperatura extends Component {
    constructor(props) {
        super(props)
        this.state = {
            temp_unit: 'C'
        }
        this.convertTemp = this.convertTemp.bind(this)
        this.handleClick = this.handleClick.bind(this)

    }
    convertTemp(temp, unit) {
        if (unit === 'C') {
            return temp
        } else if (unit === 'F') {
            let tempInFahrenheit = parseFloat(temp) * (9 / 5) + 32
            return tempInFahrenheit.toFixed(2)
        }
    }//end convertTemp

    handleClick() {
        let unitToShow = 'C'
        switch (this.state.temp_unit) {
            case 'C':
                unitToShow = 'F'
                break;
            case 'F':
                unitToShow = 'C'
                break;
            default:
                unitToShow = 'C'
        }
        this.setState({
            temp_unit: unitToShow
        })
    }//end handleClick
    render() {
        return (
            <div
                style={tarjetas_transparentes}
            >
                <h2>Main</h2>
                <Container>
                    <Row>
                        <Col>
                            <p><b>temp: </b>
                                {this.convertTemp(this.props.data.temp, this.state.temp_unit)}
                                º{this.state.temp_unit}
                            </p>
                            <p><b>feels_like: </b>
                                {this.convertTemp(this.props.data.feels_like, this.state.temp_unit)}
                                º{this.state.temp_unit}
                            </p>
                            <p><b>T_min: </b>
                                {this.convertTemp(this.props.data.temp_min, this.state.temp_unit)}
                                º{this.state.temp_unit}

                            </p>
                            <p><b>T_max: </b>
                                {this.convertTemp(this.props.data.temp_max, this.state.temp_unit)}
                                º{this.state.temp_unit}

                            </p>
                        </Col>
                        <Col>
                            <p><b>pressure: </b> {this.props.data.pressure} mbar</p>
                            <p><b>humidity: </b> {this.props.data.humidity} %</p>
                            <p><b>sea_level: </b> {this.props.data.sea_level ? this.props.data.sea_level+'mt' : "N/A"}</p>
                            <p><b>grnd_level: </b> {this.props.data.grnd_level ? this.props.data.grnd_level+ 'mt' : "N/A"}</p>

                        </Col>

                    </Row>

                    <Button onClick={this.handleClick}>º{this.state.temp_unit}</Button>
                </Container>


            </div >
        )
    }
}



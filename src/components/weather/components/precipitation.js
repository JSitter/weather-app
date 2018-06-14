import React, { Component } from 'react';

class Precipitation extends Component{
    render(){
        return(
            <div className="precipitation weather-box">
                <h3>Precipitation</h3>
                <div>{this.props.precip_today} <small>inches today</small></div>
                <div>{this.props.precip_hr} <small>inches per hour</small></div>
            </div>
        )
    }
}

export default Precipitation
import React, { Component } from 'react';

class Precipitation extends Component{
    render(){
        return(
            <div className="precipitation weather-box">
                {this.props.precip}
            </div>
        )
    }
}

export default Precipitation
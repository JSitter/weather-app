import React, { Component } from 'react';

class Radar extends Component{
    constructor(props){
        super(props);
        if(typeof this.props.lat == "undefined"){
            this.lat = "0"
            this.lon = "0"
        }else{
            this.lat = this.props.lat
            this.lon = this.props.lon
        }


        this.radar_link = "/api/radar/"+process.env.REACT_APP_API_KEY + "/"+ this.lat + "/" + this.lon
        
    }
    render(){
        return (
            <div>
                <h2>Radar</h2>
               <img src={this.radar_link} alt=""/>
            </div>
        )
    }
}
export default Radar
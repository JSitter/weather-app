import React, { Component } from 'react';
import Today from './today'
import Precipitation from './precipitation';
import Wind from './wind'
import Radiation from './radiation'

class Weather extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            weather: null,
        }
    }

    render(){

        return(
            <section className="weather-section">
              
                <Today 
                    icon={this.props.icon}
                    temp={this.props.temp}
                    desc={this.props.desc}
                />
                <Precipitation
                    precip_today={this.props.precip_today}
                    precip_hr = {this.props.precip_hr}
                    pressure_trend = {this.props.pressure_trend}
                    pressure_mb = {this.props.pressure_mb}
                />
                
                {/* <Wind
                    wind_direction = {this.props.wind_direction}
                    wind_speed = {this.props.wind_speed}
                    wind_direction = {this.props.wind_direction}
                    wind_gust = {this.props.wind_gust}
                />

                <Radiation 
                    uv = {this.props.uv}
                    vis = {this.props.vis}
                    solar_rad = {this.props.solar_rad}
                /> */}

            </section>            
        )
    }
}


        // const radar_img_path = "http://api.wunderground.com/api/"+this.apikey+"/animatedsatellite/image.gif?lat="+lat+"&lon="+lon+"&radius=90"
        // const ladar_img_path = "https://resize.wunderground.com/cgi-bin/resize_convert?ox=gif&url=radblast/cgi-bin/radar/WUNIDS_composite%3Fcenterlat="+lat+"%26centerlon="+lon+"%26radius=30%26newmaps=1%26smooth=1%26reproj.automerc=1%26api_key="+this.apikey
        // const query_path = "https://api.wunderground.com/api/"+this.apikey+"/conditions/q/CA/San_Francisco.json"
        // fetch(query_path).then((response)=>response.data())
        // .then((json)=>console.log(json))
        // .catch(err=>console.log(err.message))
        // console.log(query_path)

        // fetch(radar_img_path).then((data)=>{
        //     console.log(data)
        // })

export default Weather;
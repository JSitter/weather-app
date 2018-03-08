import React, { Component } from 'react';
import GeoLocation from './geolocation'
import Radar from './radar'
class Weather extends Component{
    constructor(props){
        super(props)
        this.apikey = this.props.apikey
        this.state = {
            weather: null
        }
    }

    fetchWeather(city){
        const lat = "34.0"
        const lon = "-118.0"
        const radar_img_path = "https://resize.wunderground.com/cgi-bin/resize_convert?ox=gif&url=radblast/cgi-bin/radar/WUNIDS_composite%3Fcenterlat="+lat+"%26centerlon="+lon+"%26radius=30%26newmaps=1%26smooth=1%26reproj.automerc=1%26api_key="+this.apikey
        const query_path = "https://api.wunderground.com/api/"+this.apikey+"/conditions/q/CA/San_Francisco.json"
        // fetch(query_path).then((response)=>response.data())
        // .then((json)=>console.log(json))
        // .catch(err=>console.log(err.message))
        // console.log(query_path)

        fetch(radar_img_path).then((data)=>{
            console.log(data)
        })
    }

    render(){
        return(
            <div>
                <a className="App-intro btn" onClick={()=>this.fetchWeather('SanFrancisco')}>
                    Try Alpo!
                </a>
                <Radar />
            </div>
            
        )
    }
}

export default Weather;
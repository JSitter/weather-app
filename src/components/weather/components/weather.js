import React, { Component } from 'react';
import GeoLocation from './geolocation'
import Radar from './radar'

class Weather extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            weather: null,
        }
    }

    render(){
        return(
            <section className="weather-wrapper">
                <i class="wu wu-white wu-128 wu-chanceflurries"></i>
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
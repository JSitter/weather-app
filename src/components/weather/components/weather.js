import React, { Component } from 'react';
import GeoLocation from './geolocation'
import Radar from './radar'
class Weather extends Component{
    constructor(props){
        super(props)
        this.apikey = this.props.apikey
        this.state = {
            weather: null,
            radar_url: '/imgs/cloud.png'
        }
    }

    handleLocation(){
        return new Promise((resolve, reject)=>{
            if("geolocation" in navigator){
                this.setState({status: "Getting your location..."});
                this.getLocation().then((location)=>resolve(location));
            } else{
                this.setState({ status: "Geolocation is not currently available."})
                reject("Geolocation not available in current browser")
            }
        })

    }
    getLocation(){
        return new Promise((resolve, reject)=>{
            navigator.geolocation.getCurrentPosition((position)=>{
                resolve(position)
            })
        })

    }

    fetchWeather(city){

        if (typeof this.state.lat == "undefined" || typeof this.state.lon == "undefined"){
            console.log('getting coordinates...')
            this.handleLocation().then((location)=>{
                this.setState({lat:location.coords.latitude, lon:location.coords.longitude})
            }).then(()=>{

                const radar_img_path = "/api/radar/"+process.env.REACT_APP_API_KEY + "/"+ this.state.lat + "/" + this.state.lon
                // fetch(radar_img_path).then((response)=> response.json())
                // .then((json)=>{
                //     console.log(json)
                // })
                this.setState({"radar_url":radar_img_path})
            })
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
    }

    render(){
        return(
            <div>

                <a className="App-intro waves-effect waves-light btn" onClick={()=>this.fetchWeather('SanFrancisco')}>
                    Try Alpo!
                </a>
                <img src={this.state.radar_url}/>
                <a className="waves-effect waves-light btn">
                    get something
                </a>
            </div>
            
        )
    }
}

export default Weather;
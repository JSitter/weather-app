import React, { Component } from 'react';

class Locate extends Component{

    constructor(props){
        super(props)

        this.state = {
            location:"",
            lat: "",
            lon: "",

            weather_recieved: "hidden",
        }
        this.handleKeyDown.bind(this)
        document.addEventListener("keydown", this.handleKeyDown)
    }
    handleKeyDown = (e) =>{
        if( e.keyCode == 13 ){
            this.props.getWeather(this.state.lat, this.state.lon, this.state.city)
        }
    }
    render(){
        let handleGetLocation=()=>{
            if("geolocation" in navigator){
                this.setState({location: "searching"});
                fetchLocation();
            } else{
                this.setState({ status: "Geolocation is currently available."})
                return
            }
        }
    
        let fetchLocation=()=>{

            navigator.geolocation.getCurrentPosition((position)=>{
                this.setState({ "lat": position.coords.latitude,
                                "lon":position.coords.longitude
                })
                let googleApiUrl = "/api/locate/city/"+process.env.REACT_APP_API_KEY+"/"+position.coords.latitude + "/"+position.coords.longitude
                console.log(googleApiUrl)
                fetch(googleApiUrl)
                .then((response)=>response.json())
                .then((json)=>{

                    this.setState({"city":json.results[3].address_components[0].long_name,
                                    "state": json.results[3].address_components[2].short_name})
                }).catch((err)=>console.log(err.message))
                this.props.handleLocationChange(position)
                
                this.setState({"location": ""})
                
               
            })
        }

        let handleGetWeather = ()=>{
            console.log(this.state.state)
            this.props.getWeather( this.state.state, this.state.city)
        }
        return (
            <div className="wrapper">
                <div className="input-wrap">
                        <a className={this.state.location} onClick={handleGetLocation}> 
                            <i className="material-icons">near_me
                            </i>
                        
                        </a>
                            <div className="input-field">
                                <input id="city"  type="text" className="" placeholder={this.state.city}>
                                </input>
                                <label htmlFor="city">City</label>
                                
                            </div>
                            
                </div>
                <a className="btn-find" >
                    <div onClick={handleGetWeather} >
                            Get the Weather
                    </div>
                </a>
                
            </div>
        )
    }
}

export default Locate;

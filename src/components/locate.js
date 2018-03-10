import React, { Component } from 'react';

class Locate extends Component{

    constructor(props){
        super(props)

        this.state = {
            location:""
        }
    }
    render(){
        let handleGetLocation=()=>{
            console.log("clicked")
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
                fetch("https://maps.googleapis.com/maps/api/geocode/json?address=")
                .then((response)=>response.json())
                .then((json)=>{
                    console.log(json)
                })
                this.props.handleLocationChange(position)
                this.setState({"location": ""})
               
            })
        }

        return (
            <div className="input-wrap">
                       <a className={this.state.location} onClick={handleGetLocation}> 
                           <i className="material-icons">my_location</i>
                       
                       </a>
                        <div className="input-field">
                            <input id="city"  type="text" className="validate">
                            </input>
                            <label htmlFor="city">Weather by City</label>
                        </div>
            </div>
        )
    }
}

export default Locate;

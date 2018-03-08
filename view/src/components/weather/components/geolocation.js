import React, {Component} from 'react'

class GeoLocation extends Component{
    constructor(props){
        super(props)
        this.state = {  lat: 0,
                        long: 0,
                        status: null
                    }
    }

    handleGetLocation(){
        if("geolocation" in navigator){
            this.setState({status: "Getting your location..."});
            this.fetchLocation;
        } else{
            this.setState({ status: "Geolocation is currently available."})
            return
        }
    }

    fetchLocation(){
        navigator.geolocation.getCurrentPosition((position)=>{
            
        })
    }

    render(){
        return (
            <div>
                geolocation
            </div>
        )
    }
}

export default GeoLocation
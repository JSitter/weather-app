import React, { Component } from 'react';

class Today extends Component{
    // api for sunrise and sunset https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400
    render(){
        let create_icon = ()=>{
            let now = new Date()
            let icon_classes = "wu wu-256 wu-white wu-day"
            if(now.getHours() > 8){
                icon_classes = "wu wu-256 wu-white wu-night"
            }
            let icon_name = this.props.icon
            icon_classes += " wu-"+icon_name
            
            console.log(icon_classes)
            let temp = this.props.temp
            let desc = this.props.desc
            return (<i className={icon_classes}></i>)


        }

        return(
            <div className="today weather-box">

                <div className="temp">
                    {this.props.temp}º
                </div>

                <div className="icn-container">
                    {create_icon()}
                </div>
                <div className="desc">
                    {this.props.desc}
                </div>

            </div>
                        
        )
    }
}
export default Today
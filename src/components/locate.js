import React, { Component } from 'react';

class Locate extends Component{
    render(){
        return (
            <div className="input-wrap">
                       <a onClick={()=>this.props.handleLocationChange("hello")}> 
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

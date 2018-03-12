import React, { Component } from 'react';
import Locate from './locate'
import logo from '../cloud.png';

class Header extends Component{

    render(){
        return(
            <header className="header">
                <div className={this.props.visibility}>
                    <h1 className="App-title">Bloop</h1>
                    <Locate 
                        handleLocationChange={this.props.handleLocationChange}
                        getWeather={this.props.getWeather}
                    />
                    
                        
                        
                </div>
            </header>
        )
    }
}

export default Header;
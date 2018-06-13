import React, { Component } from 'react';
import Locate from './locate'
import logo from '../cloud.png';

class Header extends Component{

    render(){
        return(
            <header className="header">
                { this.props.isHidden && <div>
                    <h1 className="App-title">Blooop</h1>
                    <Locate 
                        handleLocationChange={this.props.handleLocationChange}
                        getWeather={this.props.getWeather}
                    />

                </div>}
            </header>
        )
    }
}

export default Header;
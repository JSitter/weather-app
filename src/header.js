import React, { Component } from 'react';
import Locate from './components/locate'
import logo from './cloud.png';

class Header extends Component{

    render(){
        return(
            <header className="header">
                
                <h1 className="App-title">Bloop</h1>
                <Locate handleLocationChange={this.props.handleLocationChange}/>
                <div className="find">
                    
                    
                </div>
            </header>
        )
    }
}

export default Header;
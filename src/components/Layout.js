import React, { Component } from 'react';
import Top10Crimes from './Top10Crimes.js';
import Bottom10Crimes from './Bottom10Crimes.js';
import MostDangerousStreets from './MostDangerousStreets.js';
import '../App.css';

class Layout extends Component {
  render() {
    return (
    	<div>
    		<Top10Crimes />
    		<Bottom10Crimes />
    		<MostDangerousStreets />
    	</div>
    );
  }
}

export default Layout;
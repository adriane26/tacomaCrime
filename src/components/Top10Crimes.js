import React, { Component } from 'react';
import Fetch from 'react-fetch';
import '../App.css';

class Top10Crimes extends Component {
  render() {
    return (
    	<div>
    	   <h1>10 Most Common Crimes</h1>
           <Fetch url="https://onedrive.live.com/?authkey=%21ANgwlxZYDmkeuKo&v=TextFileEditor&id=1121E4DCC138F1E0%21109&cid=1121E4DCC138F1E0&parId=root" options="no-cors">
               <MostCommon />
           </Fetch>
    	</div>
    );
  }
}

class MostCommon extends Component {
    render() {
        console.log(this.props);
        return <div/>
    };
}

export default Top10Crimes;
import React, { Component } from 'react';
import Properties from './Properties';

class Home extends Component {

  render(){
    return(
      <div>
        <Properties properties={this.props.properties} />
      </div>
    );
  }
}

export default Home;

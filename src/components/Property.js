import React, { Component } from 'react';

class Property extends Component {
  render (){
    return (
      <div className="property col-md-4">
        <h3>{this.props.address}</h3>
        <img src={this.props.img} />
        <h3>{this.props.br}</h3>
        <h3>{this.props.ba}</h3>
        <h3>{this.props.rent}</h3>
      </div>
    );
  }
}

export default Property;

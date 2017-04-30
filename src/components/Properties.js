import React, { Component } from 'react';
import Property from './Property';

class Properties extends Component {
  render(){
    var filteredProperties = this.props.properties.map((property) => {
      return <Property key={property.id}
                       id={property.id}
                       address={property.address}
                       price={property.price}
                       description={property.description}
                       br={property.br}
                       ba={property.ba}
                       img={property.img} />
    });
    return (
      <div className="properties">
        {filteredProperties}
      </div>
    );
  }
}

export default Properties;

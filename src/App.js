import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';

class App extends Component {
  constructor(){
    super();
    this.state = {
      list: [
        {
          id: 1,
          address: '9781 SW Landau Pl',
          description: 'A lovely residency found right in the quaint Metzger neighborhood within walking distance of downtown!',
          br: 5,
          ba: 2.5,
          rent: 2500,
          pet: true,
          smoking: false,
          img: '../images/img1.jpg'
        },
        {
          id: 2,
          address: '9781 SW Landau Pl',
          description: 'A lovely residency found right in the quaint Metzger neighborhood within walking distance of downtown!',
          br: 5,
          ba: 2.5,
          rent: 2500,
          pet: true,
          smoking: false,
          img: '../images/img1.jpg'
        },
        {
          id: 3,
          address: '9781 SW Landau Pl',
          description: 'A lovely residency found right in the quaint Metzger neighborhood within walking distance of downtown!',
          br: 5,
          ba: 2.5,
          rent: 2500,
          pet: true,
          smoking: false,
          img: '../images/img1.jpg'
        },
        {
          id: 4,
          address: '9781 SW Landau Pl',
          description: 'A lovely residency found right in the quaint Metzger neighborhood within walking distance of downtown!',
          br: 5,
          ba: 2.5,
          rent: 2500,
          pet: true,
          smoking: false,
          img: '../images/img1.jpg'
        }
      ]
    }
  }
  render(){
    return(
      <div>
        <Home properties={this.state.list} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

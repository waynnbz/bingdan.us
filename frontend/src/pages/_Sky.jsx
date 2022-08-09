import React, { Component } from 'react';

class Sky extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: []
      }
    }
    Cloud = () => {
      // var random = Math.random();
      // var top = (Math.round((random + 0.00005) * 70)) + '%';
      var top = Math.floor((Math.random() * (65) - 3)) + '%';
      var dim = (Math.floor((Math.random() + 0.3) * 80)) + 'px';
      var index = (Math.round(Math.random() * 2));
      var velocity = Math.floor((Math.random() * 5) * 10) + 's';
      console.log(top, dim, index, velocity);
      var cloudStyle = {
        top: top,
        height: dim,
        zIndex: index,
        animationDuration: velocity,
        animationTimingFunction: 'linear',
        animationName: 'cloud',
        animationDelay: '0',
        position: 'absolute',
        padding: '0',
        margin: '0',
        left: '-100px',
        visibility: 'hidden',
      }
      
      this.setState({data: [...this.state.data, cloudStyle]});
    }
    componentDidMount() {
      setInterval(() => this.Cloud(), 5000);
  
    }
    render() {
      // console.log(this.state.data);
      return (
        this.state.data.map((e, i) => {
          return (
            <img style={e} key={i} src={require('../img/valentines-cookie.svg')} alt="cloud"/>
          )
        })
      )
    }
  }

export default Sky;  
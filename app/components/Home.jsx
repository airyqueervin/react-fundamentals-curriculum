import React from 'react';
import GetCityContainer from '../containers/GetCityContainter.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      container: {
        backgroundSize: 'cover',
        backgroundImage: "url('./app/images/pattern.svg')",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%'
      },
      header: {
        fontSize: 45,
        color: '#fff',
        fontWeight: 100
      } 
    };
  }

  render() {
    return (
      <div style={this.state.container}>
        <h1 style={this.state.header}>Enter a City and State</h1>
        <GetCityContainer />
      </div>
    )
  }
}

export default Home;

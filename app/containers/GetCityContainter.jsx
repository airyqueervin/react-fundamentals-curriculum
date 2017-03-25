import React from 'react';
import GetCity from '../components/GetCity.jsx';

class GetCityContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}

    this.getDefaultProps = this.getDefaultProps.bind(this);
    this.getInitialState = this.getInitialState.bind(this);
    this.handleSubmitCity = this.handleSubmitCity.bind(this);
    this.handleUpdateCity = this.handleUpdateCity.bind(this);
  }

  getDefaultProps() {
    return {
      direction:'column'
    }
  }

  getInitialState() {
    return {
      direction: 'column'
    }
  }

  handleSubmitCity() {
    console.log(this.state.city)
  }

  handleUpdateCity(e) {
    this.setState({
      city: e.target.value
    })
  }

  render() {
    return (
      <GetCity
        direction={this.props.direction}
        onSubmitCity={this.handleSubmitCity}
        onUpdateCity={this.handleUpdateCity}
        city={this.state.city} />

    )
  }
}

export default GetCityContainer;
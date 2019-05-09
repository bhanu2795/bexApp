import React from 'react';
import AppNavigator from './src/routes/routing';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <React.Fragment>
        <AppNavigator />
      </React.Fragment>
    );
  }
}
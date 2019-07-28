import React, { Component } from 'react';

import { Navigator, Main } from './components';
import './App.css';

import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import { API, graphqlOperation } from 'aws-amplify';

import * as mutations from "./graphql/mutations";
import * as queries from "./graphql/queries";
import * as subscriptions from "./graphql/subscriptions";


Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigator />
        <Main />
      </React.Fragment>
    );
  }
}

export default App;

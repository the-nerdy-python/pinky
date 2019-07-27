import React, { Component } from "react";
import Amplify, { graphqlOperation } from "aws-amplify";
import { withAuthenticator, Connect } from "aws-amplify-react";

import "./App.css";

import awsConfig from "./aws-exports";
import * as mutations from "./graphql/mutations";
import * as queries from "./graphql/queries";
import * as subscriptions from "./graphql/subscriptions";

Amplify.configure(awsConfig);

const ListView = ({ rats }) => (
  <div>
    <h2>All Rats</h2>
    <ul>
      {rats.map(rat => (
        <li key={rat.id}>
          {rat.name} - {rat.description} - ({rat.id})
        </li>
      ))}
    </ul>
  </div>
);

class AddRat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: ""
    };
  }

  handleChange(name, ev) {
    this.setState({ [name]: ev.target.value });
  }

  async submit() {
    const { onCreate } = this.props;
    var input = {
      name: this.state.name,
      description: this.state.description
    };

    this.setState({ name: "", description: "" });
    await onCreate({ input });
  }

  render() {
    return (
      <div>
        <input
          name="name"
          placeholder="name"
          onChange={ev => {
            this.handleChange("name", ev);
          }}
          style={{
            padding: "8px 16px",
            margin: "5px"
          }}
        />
        <input
          name="description"
          placeholder="description"
          onChange={ev => {
            this.handleChange("description", ev);
          }}
          style={{
            padding: "8px 16px",
            margin: "5px"
          }}
        />
        <button
          style={{
            padding: "8px 16px",
            margin: "5px"
          }}
          onClick={this.submit.bind(this)}
        >
          Add
        </button>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Add Rat</h2>
        <Connect mutation={graphqlOperation(mutations.createRat)}>
          {({ mutation }) => <AddRat onCreate={mutation} />}
        </Connect>

        <Connect
          query={graphqlOperation(queries.listRats)}
          subscription={graphqlOperation(subscriptions.onCreateRat)}
          onSubscriptionMsg={(prev, { onCreateRat }) => {
            return {
              listRats: {
                items: [...prev.listRats.items, onCreateRat]
              }
            };
          }}
        >
          {({ data: { listRats }, loading, error }) => {
            if (error) return <h3>Error</h3>;
            if (loading || !listRats) return <h3>Loading...</h3>;
            return listRats.items.length ? (
              <ListView rats={listRats ? listRats.items : []} />
            ) : (
              <h3>No rats yet...</h3>
            );
          }}
        </Connect>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
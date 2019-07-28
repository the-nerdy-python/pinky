import React, { Component } from 'react';
import { Lead, BSpan, Table } from 'bootstrap-4-react';

import { API, graphqlOperation } from 'aws-amplify';

import * as queries from "../graphql/queries";

export default class Home extends Component {
  state = {
    rats: []
  }
  async componentDidMount() {
    if (this.props.user) {
      const ratData = await API.graphql(graphqlOperation(queries.listRats))
      this.setState({ rats: ratData.data.listRats.items })
    }
  }
  render() {
    const { user } = this.props;
    console.log(user)
    console.log(this.state.rats)
    return (
      <React.Fragment>
        <h1>Home</h1>
        {
          user
          &&
          <>
            <Lead>You are signed in as  <BSpan font="italic">{user.username}</BSpan>.</Lead>
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Tub #</th>
                  <th scope="col">Status</th>
                  <th scope="col">Sex</th>
                  <th scope="col">Size</th>
                </tr>
              </thead>
              <tbody>
                {this.state.rats.map((item, i) => {
                  return [
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>{item.tub}</td>
                    <td>{item.status}</td>
                    <td>{item.sex}</td>
                    <td>{item.size}</td>
                  </tr>
                  ]
                })}
                
              </tbody>
            </table>
          </>
        }
      </React.Fragment>
    )
  }
}

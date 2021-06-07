import React, { Component } from 'react';
import { Redirect } from 'react-router';

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <h1>Página não encontrada</h1>
        <Redirect to="/" />
      </div>
    );
  }
}

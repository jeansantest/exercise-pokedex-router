import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <section>
        <h2> About Pokédex </h2>
        <section>
          <p>
            {' '}
            This application simulates a Pokédex, a digital encliclopedia
            containing all Pokémons{' '}
          </p>
          <p>
            {' '}
            One can filter Pokémons by type, and see more details for each one
            of them{' '}
          </p>
        </section>
      </section>
    );
  }
}

import React, { Component } from 'react';

export default class PokemonDetails extends Component {
  findPokemon(i) {
    const { pokemons } = this.props;
    return pokemons.find(({ id }) => id === i);
  }

  render() {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    const pokemon = this.findPokemon(Number(id));
    const { name, type, averageWeight, summary, foundAt, image } = pokemon;

    return (
      <div>
        <h3>{name}</h3>
        <img src={image} alt={name} />
        <p>{type}</p>
        <p>
          Average weight: {averageWeight.value} {averageWeight.measurementUnit}
        </p>
        <p>{summary}</p>
        <h3>You can find him in these places</h3>
        {foundAt.map((e) => {
          return (
            <div className={image}>
              <p>{e.location}</p>
              <img src={e.map} alt={e.location} />
            </div>
          );
        })}
      </div>
    );
  }
}

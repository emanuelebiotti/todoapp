import React, {Component} from 'react';

export default class Pokemon extends Component {

    state = {
        arr: []
    }

    fetchPokemon = () => {
        for (let i = 1; i <= 100; i++) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.name)
                this.setState({arr: [...this.state.arr, data.name]})
            })
            .catch(error => console.log(error))
        }
    }
    render() {
        return (
            <React.Fragment>
                <button onClick={this.fetchPokemon}>click</button>
                <ul>
                {this.state.arr.map(p => <li>{p}</li>)}
                </ul>
            </React.Fragment>
        )
    }
}
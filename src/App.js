import { Component } from "react";
import Table from "./Table";
import Form from "./Form";
import './index.css'

class App extends Component {
    state = {
        characters: [
            {
                name: 'Charlie',
                job: 'Janitor',
            },
            {
                name: 'Mac',
                job: 'Bouncer',
            },
            {
                name: 'Dee',
                job: 'Aspring actress',
            },
            {
                name: 'Dennis',
                job: 'Bartender',
            }
        ]
    }
    removeCharacters = (index) => {
        const { characters } = this.state
        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            })
        })
    }

    handelSubmit = (character) => {
        const { characters } = this.state;
        characters.push(character)
        this.setState({
            characters: characters
        });
    }

    render() {
        const characters = this.state.characters;
        return (
            <div className="App">
                <Table characterData={characters} removeCharacters={this.removeCharacters}></Table>
                <Form handleSubmit={this.handelSubmit}></Form>
            </div>
        )
    }
}

export default App
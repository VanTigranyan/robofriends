import React from 'react';
import './app.css';
import CardList from './CardList';
import SearchBox from './Searchbox';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}));
    }
    

    onsearchChange = (event) => {
        this.setState({ searchfield: event.target.value});
    }
    render() {

        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onsearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        )
    }
}

export default App;
import React from 'react';
import './app.css';
import CardList from '../components/CardList';
import SearchBox from '../components/Searchbox';
import Scroll from '../components/Scroll'

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

        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length === 0? 
            (
                <div id="nb-global-spinner" className="spinner">
                    <div className="blob blob-0"></div>
                    <div className="blob blob-1"></div>
                    <div className="blob blob-2"></div>
                    <div className="blob blob-3"></div>
                    <div className="blob blob-4"></div>
                    <div className="blob blob-5"></div>
                </div>
            ):(
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={ this.onsearchChange }/>
                    <Scroll>
                        <CardList robots={ filteredRobots }/>
                    </Scroll>
                </div>
            )
        
    }
}

export default App;
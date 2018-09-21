import React from 'react';
import './app.css';
import CardList from '../components/CardList';
import SearchBox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import { connect } from 'react-redux';
import { setSearchField, requestRobotsAction } from '../actions';

const mapStateToProps = state => {
  console.log(state);
  return {
    searchField: state.searchRobotsReducer.searchField,
    robots: state.requestRobotsReducer.robots,
    isPending: state.requestRobotsReducer.isPending,
    error: state.requestRobotsReducer.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onsearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobotsAction())
  }
}

class App extends React.Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }

    render() {
        const { searchField, onsearchChange,robots, isPending } = this.props;

        const filteredRobots = robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchField.toLowerCase())
        })

        return isPending ?
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
                    <SearchBox searchChange={ onsearchChange }/>
                    <Scroll>
                        <CardList robots={ filteredRobots }/>
                    </Scroll>
                </div>
            )

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

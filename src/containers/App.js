import React, { Component } from 'react';
import CardsArray from '../components/cardsArray';
import '../index.css';
import './App.css';
import Scroll from '../components/scroll';
import SearchBox from '../components/searchBox';
import ErrorBoundry from '../components/ErrorBoundry';

import { setSearchField, requestRobots } from '../actions';
import { connect } from 'react-redux';
import Header from '../components/Header';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => { return dispatch(setSearchField(event.target.value)) },
    onRequestRobots: () => dispatch(requestRobots())
  }
};

class App extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }


  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (isPending) ?
      <h1 className="tc logo">Loading</h1>
      : (
        <div className="tc">
          <Header />
          <SearchBox searchChange={onSearchChange} />

          <Scroll >
            <ErrorBoundry>
              <CardsArray robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div >
      )

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
import './App.css';
import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: '',
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  }

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    if (robots.length === 0) {
      return (
        <div className='tc'>
          <h1>Robofriends</h1>
        </div>
      );
    } else {
      return (
        <div className='tc'>
          <h1>Robofriends</h1>
          <SearchBox searchChange={ this.onSearchChange } />
          <Scroll>
            <ErrorBoundry>
              <CardList elements={ filteredRobots } />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }
}

export default App;
import React, {Component} from 'react';
import logo from '../logo.svg';
import '../App.css';
import ListPosts from './ListPosts';
import ListCategories from './ListCategories';
import {Link} from 'react-router-dom';
import {Route, BrowserRouter} from 'react-router-dom';
import {Switch} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <ListCategories/>
          </header>
              <Route path="/" exact component={ListPosts} />
              <Route path="/:category" exact component={props => <ListPosts {...props} />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App
import React, {Component} from 'react';
import '../App.css';
import ListPosts from './ListPosts';
import ListCategories from './ListCategories';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';

class App extends Component {

  render() {
    return (
        <div className="App">
          <header>
            <Link to='/'>Home</Link>
            <ListCategories/>
          </header>
          <Route path="/" exact component={ListPosts}/>
          <Route path="/:category" exact component={props => <ListPosts {...props}/>}/>
        </div>
    );
  }
}

export default App
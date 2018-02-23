import React, {Component} from 'react';
import logo from '../logo.svg';
import '../App.css';
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'
import ListPosts from './ListPosts'


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ListPosts />
      </div>
    );
  }
}

function mapStateToProps({posts}) {
  return {
    posts: posts[Object.keys(posts)]
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPosts: () => dispatch(fetchPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
import React, {Component} from 'react';
import logo from '../logo.svg';
import '../App.css';
import {connect} from 'react-redux'
import {receivePosts} from '../actions'
import * as postsAPIUtil from '../utils/api';


class App extends Component {
  componentDidMount() {
    const { getPosts } = this.props
    getPosts()
  }
  render() {
    const { posts } = this.props
    console.log(posts);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          hello
        </p>
      </div>
    );
  }
}

function mapStateToProps({posts}) {
  return {posts: posts}
}

function mapDispatchToProps(dispatch) {
  return {
    getPosts: () => postsAPIUtil
      .getPosts()
      .then(posts => dispatch(receivePosts(posts)))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
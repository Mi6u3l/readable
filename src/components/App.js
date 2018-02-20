import React, {Component} from 'react';
import logo from '../logo.svg';
import '../App.css';
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

class App extends Component {

  componentDidMount() {
    const {getPosts} = this.props
    getPosts()
  }
  render() {
    const {posts} = this.props
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {posts
          ? <ul>
              {posts.map((post) => (
                <li key={post.id}>
                {post.title}
                </li>
              ))}
            </ul>
          : <div>Loading posts...</div>
        }
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
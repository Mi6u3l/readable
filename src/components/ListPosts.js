import React, {Component} from 'react';
import {connect} from 'react-redux'
import {fetchPosts, fetchPostsByCategory} from '../actions'
import { Link } from 'react-router-dom';

class ListPosts extends Component {

  componentDidMount() {
    const {getPosts, getPostsByCategory} = this.props
    if (this.props.match.params.category) {
      getPostsByCategory(this.props.match.params.category)
    } else {
      getPosts()
    }

  }

  render() {
    const {posts} = this.props
    return (
      <div>
        {posts && posts.length > 0
          ? <ul>
              {posts.map((post) => (
                <li key={post.id}>
                  <Link to={`/posts/${post.id}`}>{post.title}</Link>

                </li>
              ))}
            </ul>
          : <div>Looking for posts...</div>
}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const posts = state.posts;
  return {
    posts: posts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPosts: () => dispatch(fetchPosts()),
    getPostsByCategory: (category) => dispatch(fetchPostsByCategory(category))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPosts)
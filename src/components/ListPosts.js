import React, {Component} from 'react';
import {connect} from 'react-redux'
import {fetchPosts, fetchPostsByCategory} from '../actions'

class ListPosts extends Component {

  componentDidMount() {
    const {getPosts, getPostsByCategory} = this.props
    if (this.props.match.params.category) {
      getPostsByCategory(this.props.match.params.category)
    } else {
      getPosts()
    }

  }

  componentDidUpdate() {}
  render() {
    const {posts} = this.props
    return (
      <div>
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

function mapStateToProps(state) {
  return {
    posts: state.posts[Object.keys(state.posts)]
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPosts: () => dispatch(fetchPosts()),
    getPostsByCategory: (category) => dispatch(fetchPostsByCategory(category))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPosts)
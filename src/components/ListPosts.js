import React, {Component} from 'react';
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

class ListPosts extends Component {

  componentWillMount() {
    const {getPosts} = this.props
    getPosts()
      if (this.props.match.params.category) {
      console.log(this.props.match.params.category)
    }

  }

  componentDidUpdate() {
  
  }
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

function mapStateToProps({posts}) {
  return {
    posts: posts[Object.keys(posts)]
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPosts: () => dispatch(fetchPosts()),
    getPostsByCategory: (category) => dispatch(fetchPosts(category))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPosts)
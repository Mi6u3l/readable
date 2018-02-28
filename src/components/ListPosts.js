import React, {Component} from 'react';
import {connect} from 'react-redux'
import {fetchPosts, fetchPostsByCategory} from '../actions'
import {Link} from 'react-router-dom';
import Modal from 'react-modal'
import AddPost from './AddPost'

class ListPosts extends Component {
  state = {
    postModalOpen: false
  }
  openPostModal = () => {
    this.setState(() => ({postModalOpen: true}))
  }
  closePostModal = () => {
    this.setState(() => ({postModalOpen: false}))
  }

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
    const {postModalOpen} = this.state

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
        <button onClick={() => this.openPostModal()} className='open-add'></button>
        <Modal
          className='modal'
          overlayClassName='overlay'
          isOpen={postModalOpen}
          onRequestClose={this.closePostModal}
          contentLabel='Modal'>
          <AddPost closePostModal={this.closePostModal}/>
        </Modal>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const posts = state.posts;
  return {posts: posts}
}

function mapDispatchToProps(dispatch) {
  return {
    getPosts: () => dispatch(fetchPosts()),
    getPostsByCategory: (category) => dispatch(fetchPostsByCategory(category))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPosts)
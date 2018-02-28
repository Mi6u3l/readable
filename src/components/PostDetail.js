import React, {Component} from 'react';
import {connect} from 'react-redux'
import {fetchPost} from '../actions'

class PostDetail extends Component {

    componentDidMount() {
        const {getPost} = this.props
        getPost(this.props.match.params.id)
    }

    render() {
        const {post} = this.props
        return (
            <div>
                {post
                    ? <div>
                            <div>
                                {post.title}
                            </div>
                            <div>
                                {post.body}
                            </div>
                        </div>
                    : <div>Loading post...</div>
}
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const post = state.posts[ownProps.match.params.id];
    return {post: post}
}

function mapDispatchToProps(dispatch) {
    return {
        getPost: (id) => dispatch(fetchPost(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
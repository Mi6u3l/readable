import * as PostsAPIUtil from '../utils/api';

export const GET_POSTS = 'GET_POSTS'

export const receivePosts = posts => ({
  type: GET_POSTS,
  posts
});

export const fetchPosts = () => dispatch => (
  PostsAPIUtil
      .getPosts()
      .then(posts => dispatch(receivePosts(posts)))
);

import * as APIUtil from '../utils/api';

export const GET_POST = 'GET_POST'
export const GET_POSTS = 'GET_POSTS'
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_POSTS_CATEGORY = 'GET_POSTS_CATEGORY'

export const receivePosts = posts => ({
  type: GET_POSTS,
  posts
});

export const receivePost = post => ({
  type: GET_POST,
  post
});

export const receivePostsByCategory = posts => ({
  type: GET_POSTS_CATEGORY,
  posts
});

export const receiveCategories = categories => ({
  type: GET_CATEGORIES,
  categories
});


export const fetchPosts = () => dispatch => (
  APIUtil
      .getPosts()
      .then(posts => dispatch(receivePosts(posts)))
);

export const fetchPost = (id) => dispatch => (
  APIUtil
      .getPost(id)
      .then(post => dispatch(receivePost(post)))
);

export const fetchPostsByCategory = (category) => dispatch => (
  APIUtil
      .getPostsByCategory(category)
      .then(posts => dispatch(receivePostsByCategory(posts)))
);

export const fetchCategories = () => dispatch => (
  APIUtil
      .getCategories()
      .then(categories => dispatch(receiveCategories(categories)))
);

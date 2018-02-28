import * as APIUtil from '../utils/api';

export const GET_POST = 'GET_POST'
export const GET_POSTS = 'GET_POSTS'
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_POSTS_CATEGORY = 'GET_POSTS_CATEGORY'
export const ADD_POST = 'ADD_POST'

export const receivePostsSuccess = posts => ({
  type: GET_POSTS,
  posts
});

export const receivePostSuccess = post => ({
  type: GET_POST,
  post
});

export const receivePostsByCategorySuccess = posts => ({
  type: GET_POSTS_CATEGORY,
  posts
});

export const receiveCategoriesSuccess = categories => ({
  type: GET_CATEGORIES,
  categories
});

export const createPostSuccess = post => ({
  type: ADD_POST,
  post
});


export const createPost = (body) => dispatch => (
  APIUtil
      .addPost(body)
      .then((res) => dispatch(createPostSuccess(res)))
);

export const fetchPosts = () => dispatch => (
  APIUtil
      .getPosts()
      .then(posts => dispatch(receivePostsSuccess(posts)))
);

export const fetchPost = (id) => dispatch => (
  APIUtil
      .getPost(id)
      .then(post => dispatch(receivePostSuccess(post)))
);

export const fetchPostsByCategory = (category) => dispatch => (
  APIUtil
      .getPostsByCategory(category)
      .then(posts => dispatch(receivePostsByCategorySuccess(posts)))
);

export const fetchCategories = () => dispatch => (
  APIUtil
      .getCategories()
      .then(categories => dispatch(receiveCategoriesSuccess(categories)))
);

const api = process.env.REACT_APP_READABLE_API_URL;
const token = process.env.REACT_APP_READABLE_API_TOKEN;
const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const addPost = (body) => fetch(`${api}/posts`, {
  method: 'POST',
  headers: {
    ...headers,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(body)
}).then(res => res.json())

export const getPosts = () => fetch(`${api}/posts`, {headers}).then((res) => res.json())

export const getPost = (id) => fetch(`${api}/posts/${id}`, {headers}).then((res) => res.json())

export const getCategories = () => fetch(`${api}/categories`, {headers}).then((res) => res.json())

export const getPostsByCategory = (category) => fetch(`${api}/${category}/posts`, {headers}).then((res) => res.json())

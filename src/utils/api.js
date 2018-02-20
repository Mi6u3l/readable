const api = process.env.REACT_APP_READABLE_API_URL;
const token = process.env.REACT_APP_READABLE_API_TOKEN;
const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

export const getPosts = () => fetch(`${api}/posts`, {headers})
  .then((res) => res.json())
  
 
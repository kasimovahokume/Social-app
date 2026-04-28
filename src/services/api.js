import axios from 'axios';
export const API = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com' });
export const getPosts = async () => (await API.get('/posts?_limit=6')).data;
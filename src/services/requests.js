import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/',
});

export async function requestInfo(body) {
  const result = await api.post('/login', body);

  return result.data;
}

export async function requestPosts() {
  const result = await api.get('/');

  return result.data;
}
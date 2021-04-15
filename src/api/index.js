import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const createTask = data => httpClient.post('/task', data);
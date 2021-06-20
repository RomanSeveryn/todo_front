import axios from 'axios';
import { BASE_URL } from '../config';

const httpClient = axios.create({
  baseURL: `${BASE_URL}/api`,
});

export const createTask = data => httpClient.post('/task', data);

export const getTasks = data => httpClient.get('/tasks', data);

export const deleteTask = ({ taskId } = {}) =>
  httpClient.delete(`/task/${taskId}`);

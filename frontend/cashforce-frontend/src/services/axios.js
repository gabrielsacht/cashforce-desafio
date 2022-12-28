import axios from 'axios';

const PORT = 3002

const api = axios.create({ baseURL: `http://localhost:${PORT}` })

export default api;
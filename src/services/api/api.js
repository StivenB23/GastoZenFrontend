import axios from 'axios';

export const api = axios.create({
    baseURL: `${import.meta.env.VITE_REACT_APP_API_URL}}`,
});

api.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
})

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response.status === 401) {
            localStorage.removeItem('token');
            window.location.href = '/';
        }
        return Promise.reject(error);
    }
);
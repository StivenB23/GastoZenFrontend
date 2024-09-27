import axios from "axios"

export const loginService = async (credentials) => {
    try {
        const auth = await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}login`, credentials);
        localStorage.setItem('token', JSON.stringify(auth.data.token))
        localStorage.setItem('user', JSON.stringify(auth.data.user))
        return auth.data;
    } catch (error) {
        console.log(error);
        return { error: true, message: error.message }
    }
}
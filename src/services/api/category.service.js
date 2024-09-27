import axios from "axios"

export const getCategories = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}categories`);
        return response.data;
    } catch (error) {
        console.log(error);
        return { error: true, message: error.message }
    }
} 
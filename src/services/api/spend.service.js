import axios from "axios";

export const getSpendsUser = async () => {
    try {
        const token = JSON.parse(localStorage.getItem("token"));
        const { id } = JSON.parse(localStorage.getItem("user"));
        const response = await axios.get(`http://localhost:3300/api/v1/outgoings/user/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
        return { error: true, message: error.message }
    }
}

export const createSpend = async (spend) => {
    try {
        const token = JSON.parse(localStorage.getItem("token"));
        const response = await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}outgoings`, spend, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response;
    } catch (error) {
        console.log(error);
        return { error: true, message: error.message }
    }
}

export const getSprendForCategories = async () => {
    try {
        const token = JSON.parse(localStorage.getItem("token"));
        const { id } = JSON.parse(localStorage.getItem("user"));

        const response = await axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}outgoings/user/${id}/categories/report`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
        return { error: true, message: error.message }
    }
}

export const getSpendLastUser = async () => {
    try {
        const token = JSON.parse(localStorage.getItem("token"));
        const { id } = JSON.parse(localStorage.getItem("user"));
        const response = await axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}outgoings/user/${id}/last`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
        return { error: true, message: error.message }
    }
}

export const getActivitiesUser = async () => {
    try {
        const token = JSON.parse(localStorage.getItem("token"));
        const { id } = JSON.parse(localStorage.getItem("user"));
        const response = await axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}outgoings/user/${id}/activities`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        console.log(response);

        return response.data;
    } catch (error) {
        console.log(error);
        return { error: true, message: error.message }
    }
}
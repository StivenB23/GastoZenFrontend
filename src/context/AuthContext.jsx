import { createContext, useEffect, useState } from "react";
import { loginService } from "../services/api/login.service.js";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const userData = localStorage.getItem('user');

        if (token && userData) {
            setUser(JSON.parse(userData)); // Parsear la información del usuario
            setIsAuthenticated(true);
        }
    }, []);

    const login = async (credentials) => {
        const response = await loginService(credentials);

        if (!response.error) {
            // Actualizar el contexto con la información del usuario
            setUser(response.user);
            setIsAuthenticated(true);
        } else {
            console.error(response.message);
        }

        return response;
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );

}
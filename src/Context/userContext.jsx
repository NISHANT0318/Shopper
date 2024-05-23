import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const { data } = await axios.get('/auth/profile', { withCredentials: true });
                setUser(data);
            } catch (error) {
                console.error('Profile fetch error:', error);
            }
        };
        fetchProfile();
    }, []);

    const login = async (email, password) => {
        try {
            const response = await axios.post('/auth/login', { email, password }, { withCredentials: true });
            setUser(response.data); // Set user immediately after login
        } catch (error) {
            console.error("Login error:", error);
        }
    };

    const logout = async () => {
        try {
            await axios.post('/auth/logout', {}, { withCredentials: true });
            setUser(null);
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    return (
        <UserContext.Provider value={{ user, setUser, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}

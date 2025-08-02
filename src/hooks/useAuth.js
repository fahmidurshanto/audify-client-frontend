import { useState, useEffect } from 'react';
import axios from 'axios';

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                await axios.get('/api/auth/verify');
                setIsAuthenticated(true);
            } catch (err) {
                setIsAuthenticated(false);
            }
        };

        checkAuth();
    }, []);

    return { isAuthenticated };
};

export default useAuth;

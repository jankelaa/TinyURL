import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BASE_URL from '../config';

const RedirectComponent: React.FC = () => {
    const { shortUrl } = useParams<{ shortUrl: string }>();

    useEffect(() => {
        const fetchRedirect = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/url/redirect/${shortUrl}`);
                if (response.data.originalUrl) {
                    window.location.href = response.data.originalUrl;
                } else {
                    console.error('URL not found');
                }
            } catch (error) {
                console.error('Error redirecting:', error);
            }
        };

        fetchRedirect();
    }, [shortUrl]);

    return (
        <div>
            <h1>Redirecting...</h1>
        </div>
    );
};

export default RedirectComponent;

import React, { useState } from 'react';
import axios from 'axios';
import BASE_URL from '../config';

const UrlShortenerComponent: React.FC = () => {
    const [originalUrl, setOriginalUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${BASE_URL}/shorten`, { originalUrl });
            setShortUrl(response.data);
        } catch (error) {
            console.error('Error shortening URL:', error);
        }
    };

    return (
        <div>
            <h1>URL Shortener</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={originalUrl}
                    onChange={(e) => setOriginalUrl(e.target.value)}
                    placeholder="Enter original URL"
                />
                <button type="submit">Shorten</button>
            </form>
            {shortUrl && (
                <div>
                    <p>Short URL: {shortUrl}</p>
                    <a href={shortUrl} target="_blank" rel="noopener noreferrer">Go to Short URL</a>
                </div>
            )}
        </div>
    );
};

export default UrlShortenerComponent;

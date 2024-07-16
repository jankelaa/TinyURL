import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BASE_URL from '../config';
import { Domain } from '../types/Domain';

const AdminComponent: React.FC = () => {
    const [domains, setDomains] = useState<Domain[]>([]);

    useEffect(() => {
        const fetchPopularDomains = async () => {
            try {
                const response = await axios.get<Domain[]>(`${BASE_URL}/admin/popular-domains`);
                setDomains(response.data);
            } catch (error) {
                console.error('Error fetching popular domains:', error);
            }
        };

        fetchPopularDomains();
    }, []);

    return (
        <div>
            <h1>Popular Domains in Last 24 Hours</h1>
            <ul>
                {domains.map((domain, index) => (
                    <li key={index}>{domain._id}: {domain.count}</li>
                ))}
            </ul>
        </div>
    );
};

export default AdminComponent;

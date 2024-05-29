import React from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function Success() {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const sessionId = query.get('session_id');
    const userId = query.get('user_id');
    const courseId = query.get('course_id');

    useEffect(() => {
        axios.get(`http://localhost:3000/api/payment/success?session_id=${sessionId}&user_id=${userId}&course_id=${courseId}`)
            .then(response => {
                console.log('Payment success response:', response.data);
            })
            .catch(error => {
                console.error('Error processing payment success:', error);
            });
    }, [sessionId, userId, courseId]);

    return (
        <div>
            <h1>Payment Successful</h1>
            <p>Your course has been added to your account.</p>
        </div>
    );
}

export default Success;

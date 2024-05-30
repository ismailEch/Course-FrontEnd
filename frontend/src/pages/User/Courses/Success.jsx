import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Success = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const sessionId = params.get('session_id');
    const userId = params.get('user_id');
    const courseId = params.get('course_id');

    useEffect(() => {
        if (sessionId && userId && courseId) {
            updatePurchasedCourses(sessionId, userId, courseId);
        }
    }, [sessionId, userId, courseId]);

    return (
        <div>
            <h1>Payment Successful!</h1>
            <p>Your course has been added to your account.</p>
        </div>
    );
};

const updatePurchasedCourses = async (sessionId, userId, courseId) => {
    try {
        await axios.put('http://localhost:3000/api/payment/update-purchased-courses', {
            userId,
            courseId,
            sessionId
        });
        console.log('Course successfully added to purchased courses');
    } catch (error) {
        console.error('Error updating purchased courses:', error);
    }
};

export default Success;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Test = () => {
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    const teacherId = localStorage.getItem('id_teacher');
    if (teacherId) {
      axios.get(`http://localhost:3000/api/subscription/teacher/plan/${teacherId}`)
        .then(response => {
          setSubscription(response.data.subscription);
        })
        .catch(error => {
          console.error('Error fetching subscription:', error);
        });
    }
  }, []);

  return (
    <div>
      {subscription ? (
        <div>
          <h2>Subscription Plan Details</h2>
          <p><strong>Teacher:</strong> {subscription.teacher.FirstName} {subscription.teacher.LastName}</p>
          <p><strong>Email:</strong> {subscription.teacher.email}</p>
          <p><strong>Plan Name:</strong> {subscription.plan.name}</p>
          <p><strong>Price:</strong> ${subscription.plan.price}</p>
          <p><strong>Description:</strong> {subscription.plan.description}</p>
          <p><strong>Features:</strong></p>
          <ul>
            {subscription.plan.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <p><strong>Start Date:</strong> {new Date(subscription.startDate).toLocaleDateString()}</p>
          <p><strong>End Date:</strong> {new Date(subscription.endDate).toLocaleDateString()}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Test;

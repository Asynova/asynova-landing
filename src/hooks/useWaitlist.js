import { useState } from 'react';

export const useWaitlist = () => {
  const [submissions, setSubmissions] = useState([]);

  const addToWaitlist = (formData) => {
    // Here you would typically make an API call
    setSubmissions([...submissions, { ...formData, id: Date.now() }]);
  };

  return { submissions, addToWaitlist };
};
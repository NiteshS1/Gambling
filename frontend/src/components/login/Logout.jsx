import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Perform logout operations here, e.g., clearing local storage, cookies, etc.
    // Example:
    
    
    // Redirect to login page
    navigate('/login');
  }, []);

  return null;
}

export default Logout;

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/firebaseSDK';

// Custom hook to handle authentication status
const useAuth = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        // User is authenticated
        setUser(currentUser);
      } else {
        // User is not authenticated, redirect to login page
        setUser(null);
        navigate('/login');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return user;
};

// Protected route component
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const user = useAuth();

  return user ? <Component {...rest} /> : null;
};

export default ProtectedRoute;

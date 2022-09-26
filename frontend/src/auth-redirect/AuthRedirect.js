import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthRedirect = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const path = window.localStorage.getItem('lastUrl');
    navigate(path);
  }, []);
};

export default AuthRedirect;

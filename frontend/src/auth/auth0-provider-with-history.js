import { Auth0Provider } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const Auth0ProviderWithHistory = ({ children }) => {
  const navigate = useNavigate();

  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const audience = process.env.REACT_APP_AUTH0_AUDIENCE;

  useEffect(() => {
    if (!window.localStorage.getItem('prevUrl')) {
      window.localStorage.setItem('prevUrl', '');
      window.localStorage.setItem('curUrl', '');
      console.log('here one time');
    }
  }, []);

  const curUrl = window.localStorage.getItem('curUrl');
  const prevUrl = window.localStorage.getItem('prevUrl');

  // Paths curUrl, prevUrl, lastUrl, :lastUrl is the last path before login/signup page
  window.localStorage.setItem('prevUrl', curUrl);
  window.localStorage.setItem('lastUrl', prevUrl);
  window.localStorage.setItem('curUrl', window.location.pathname);

  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  const prevPath = '/Redirect';
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin + prevPath}
      onRedirectCallback={onRedirectCallback}
      audience={audience}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;

Auth0ProviderWithHistory.propTypes = {
  children: PropTypes.objectOf(PropTypes.object()).isRequired,
};

/* eslint-disable comma-dangle */
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';
import store from './redux/Store';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Provider store={store}>
      <Auth0ProviderWithHistory>
        <CookiesProvider>
          <App />
        </CookiesProvider>
      </Auth0ProviderWithHistory>
    </Provider>
  </Router>
);

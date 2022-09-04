import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['user']);

  useEffect(() => {
    if (cookies.user) {
      navigate('/');
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    setCookie('user', email, { path: '/' });
    navigate(-1);
  };

  // Scroll to top
  window.scrollTo(0, 0);

  return (
    <Container>
      {!cookies.user && (
        <div className="login-wrapper">
          <h1>Login</h1>
          <form onSubmit={(e) => handleSubmit(e)} method="post">
            <input placeholder="Email" name="email" />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </Container>
  );
}

export default Login;
const Container = styled.div`
  height: 80vh;

  .login-wrapper {
    width: 80%;
    margin: 5rem auto;
    background-color: rgba(255, 255, 255, 0.4);
    padding: 10px;

    h1 {
      text-align: center;
    }

    input {
      width: 100%;
      height: 35px;
      padding-left: 15px;
      border: none;
      border-radius: 5px;
    }

    button {
      width: 100%;
      margin: 0 auto;
      margin-top: 1rem;
      border: none;
      color: #fff;
      background-color: #222;
      height: 40px;
      font-size: 0.9rem;
      cursor: pointer;
      border-radius: 5px;
      transition: background-color 0.5s ease-in-out;

      &:hover {
        background-color: #ffa301;
      }
    }
  }
`;

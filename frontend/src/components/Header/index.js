/* eslint-disable react/jsx-curly-newline */
/* eslint-disable no-confusing-arrow */
/* eslint-disable implicit-arrow-linebreak */

import styled from 'styled-components';
import HeaderNav from './HeaderNav';

import Banner from '../Banner.js';
import TextMassage from './TextMassage';

function index() {
  return (
    <Container className="column">
      <HeaderNav />
      <Banner />
      <TextMassage />
    </Container>
  );
}

export default index;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
`;

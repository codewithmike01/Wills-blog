import styled from 'styled-components';
import SearchForm from './SearchForm';
import Weather from './Weather';

function NoticePots() {
  return (
    <Container className="flex column">
      <SearchForm />
      <Weather />
    </Container>
  );
}

export default NoticePots;

const Container = styled.div`
  gap: 2.5rem;
  width: 100%;
`;

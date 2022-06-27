import React from 'react';
import styled from 'styled-components';
import { FaSistrix } from 'react-icons/fa';

function SearchForm() {
  return (
    <Container>
      <form>
        <div className="search-container flex j-between">
          <input type="text" placeholder="search" name="search" />
          <FaSistrix />
        </div>
      </form>
    </Container>
  );
}

export default SearchForm;

const Container = styled.div`
  form {
    .search-container {
      align-items: center;
      gap: 1rem;
      width: 100%;
      padding-right: 0.5rem;
      border: 1px solid gray;

      svg {
        font-size: 1.3rem;
      }

      input {
        width: 100%;
        padding: 1rem;
        font-size: 1.3rem;
        color: #fff;
        border: none;
        border-radius: 5px;
        background-color: transparent;

        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus,
        &:-webkit-autofill:active {
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
        }

        &:focus {
          outline: none;
        }
      }
    }
  }
`;

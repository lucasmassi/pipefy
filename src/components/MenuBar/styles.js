import styled from 'styled-components';

export const Container = styled.div`
  width: 60px;
  height: 100%;
  float: left;
  display: position;
  top: 0;
  background: #fff;
  border-right: 1px solid #e6ecf5;

  button {
    background: transparent;
    border: 0;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 30px;

    svg {
      color: #9aaabe;
      transition: 0.3s;
    }
  }

  button:hover {
    svg {
      color: #1f8ded;
      transition: 0.3s;
    }
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  height: 80px;
  padding: 0 30px;
  background: #1f8ded;
  color: #fff;
  justify-content: space-between;

  display: flex;
  align-items: center;

  h1 {
    margin-right: 50px;
  }

  h3 {
    font-weight: 500;
  }
`;

export const Profile = styled.div`
  align-items: right;
  justify-content: right;
  display: flex;

  img {
    width: 30px;
    height: 30px;
    border-radius: 3px;
    cursor: pointer;
  }

  svg {
    cursor: pointer;
    margin-right: 20px;
  }
`;
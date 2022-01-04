import styled from 'styled-components';
export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 780px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  border-radius: 15px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  background-color: rgba(135, 132, 132, 0.2);
  background-color: #ebe5e5;
  h1 {
    text-transform: uppercase;
  }
  h2 {
    margin-bottom: 10px;
  }
`;

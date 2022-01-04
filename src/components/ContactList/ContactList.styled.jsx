import styled from 'styled-components';
export const ContactListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 340px;
  li {
    width: 100%;
    color: rgba(0, 0, 0, 0.6);
    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }
  button {
    margin-left: auto;
    float: right;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: none;
  }
`;

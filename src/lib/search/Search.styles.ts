import styled from '../styled-components';

export const Search = styled.input`
  width: 100%;
  background-color: ${props => props.theme.editor};
  border: 1px solid rgb(9, 20, 28);
  border-radius: 3px;
  box-sizing: border-box;
  padding: 6px 12px;
  font-size: 14px;
  color: white;
  &:focus,
  &:active {
    outline: none;
  }
`;

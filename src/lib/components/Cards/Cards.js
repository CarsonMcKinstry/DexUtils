import styled from 'styled-components';

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 12px;
  width: 100%;

  @media screen and (max-width: ${ props => props.theme.screenSizes.medium }) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: ${ props => props.theme.screenSizes.small }) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default CardGrid
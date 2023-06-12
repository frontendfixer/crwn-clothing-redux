import styled from 'styled-components';

import device from '../../assets/styled/breakpoint';

export const CategoryContainer = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: minmax(1fr);
  grid-template-rows: auto 1fr;
`;

export const CategoryTitle = styled.h2`
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  background-color: hsl(0, 0%, 40%);
  color: hsl(0 0% 90%);
  padding-block: 10px;
  padding-inline: 20px;
`;
export const CategoryItems = styled.div`
  display: grid;
  row-gap: 20px;
  column-gap: 10px;
  grid-template-columns: minmax(1fr);
  padding-block-end: 10px;

  @media only screen and (min-width: ${device.small}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (min-width: ${device.medium}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

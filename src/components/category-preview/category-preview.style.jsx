import { Link } from 'react-router-dom';
import styled from 'styled-components';

import device from '../../assets/styled/breakpoint';
import color from '../../assets/styled/color';

export const CategoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 10px;
  margin-block-end: 30px;
`;

export const CategoryHeading = styled.div`
  width: 100%;
  text-align: left;
  text-transform: uppercase;
  letter-spacing: 2px;
  background-color: ${color.black};
  color: ${color.white};
  padding-block: 10px;
  padding-inline: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const MoreButton = styled(Link)`
  padding: 4px 12px;
  color: ${color.white};
  text-decoration: none;
  text-transform: lowercase;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 1px;
  border-radius: 4px;
  transition: 350ms;
  &:hover {
    background-color: ${color.white};
    color: ${color.black};
  }
`;

export const ProductPreview = styled.div`
  display: grid;
  row-gap: 20px;
  column-gap: 10px;
  grid-template-columns: repeat(1, 1fr);
  // padding-inline: 10px;
  padding-block-end: 10px;

  @media screen and (min-width: ${device.small}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: ${device.medium}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

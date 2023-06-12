import styled from 'styled-components';

import { BaseButton, InvertedButton } from '../button/button.style';

export const ProductCardContainer = styled.div`
  display: grid;
  background-color: hsl(0, 0%, 100%);
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: 1fr auto;
  position: relative;
  border: 1px solid hsl(0, 0%, 60%);

  ${BaseButton},
  ${InvertedButton} {
    padding-block: 1rem;
    width: 80%;
    opacity: 0.7;
    position: absolute;
    left: 10%;
    bottom: 20%;
    transform: scale(0);
    transition: transform 250ms ease-in-out;
  }

  &:hover ${BaseButton} {
    transform: scale(1);
    opacity: 1;
  }
  &:hover ${InvertedButton} {
    transform: scale(1);
    opacity: 1;
  }
`;

export const ProductImage = styled.div`
  height: 336px;
  width: 100%;
  border-bottom: 1px solid hsl(0, 0%, 60%);
  img {
    width: 100%;
    height: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    margin-bottom: 10px;
    ${ProductCardContainer}:hover & {
      opacity: 0.8;
    }
  }
`;

export const ProductCardFooter = styled.div`
  padding: 10px;
  display: flex;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
`;

export const ProductName = styled.h2`
  font-size: inherit;
  font-weight: 400;
`;
export const ProductPrice = styled.span`
  padding-left: 4px;
  border-left: 2px solid hsl(252, 63%, 97%);
  &::before {
    content: '\\0024';
    padding-right: 5px;
  }
`;

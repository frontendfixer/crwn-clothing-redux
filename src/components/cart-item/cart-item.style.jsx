import styled from 'styled-components';

export const ItemContainer = styled.div`
  width: 100%;
  background-color: hsl(0, 0%, 96%);
  display: flex;
  gap: 1rem;
`;

export const ItemImage = styled.img`
  width: 30%;
`;

export const ItemBody = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: 14px;
`;

export const ItemName = styled.h2`
  font-size: 14px;
  font-weight: normal;
`;

export const ItemQuantity = styled.span`
  font-size: 14px;
  border-radius: 5px;
`;

export const Arrow = styled.button`
  cursor: pointer;
  padding-inline: 0;
  background-color: transparent;
  color: #333;
  font-size: 20px;
`;

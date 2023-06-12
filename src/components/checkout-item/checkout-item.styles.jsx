import styled from 'styled-components';

const borderColor = '#ccc';

export const ItemContainer = styled.div`
  width: 100%;
  padding-block: 10px;
  font-size: 20px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${borderColor};
`;

export const ImageContainer = styled.div`
  width: 30%;
  max-width: 120px;
  padding: 4px;
  img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
  }
`;

export const FlexContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: ${props => props.flex};
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const SpanBlock = styled.span`
  &.name {
    text-align: center;
    font-size: clamp(18px, 1.53vw, 22px);
  }
  &.quantity {
    display: flex;
    gap: 6px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: #bbb;
  color: #333;
  padding-inline: 6px;
  padding-block-end: 3px;
  border: none;
  outline: none;
  border-radius: 4px;
`;

import styled from 'styled-components';

export const IconContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.125rem;
  position: relative;
`;
export const CountContainer = styled.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e0e0e0;
  color: #474747;
  border-radius: 50vw;
  position: absolute;
  top: -5px;
  right: -5px;
`;

export const ItemCount = styled.span`
  font-size: 10px;
  font-weight: bold;
`;

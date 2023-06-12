import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  width: 100%;
  max-width: 768px;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Heading = styled.h2`
  width: 100%;
  padding-block: 6px;
  font-size: clamp(20px, 1.89vw, 27px);
  text-align: center;
  text-transform: capitalize;
  background-color: #ddd;
  color: hsl(0, 0%, 20%);
  margin-block-end: 30px;
`;

export const CartTotal = styled.div`
  width: 100%;
  padding-inline-end: 20px;
  padding-block-start: 10px;
  text-align: right;
  font-size: clamp(18px, 1.53vw, 22px);
  font-weight: bold;
  /* border-top: 1px solid #ddd; */
`;

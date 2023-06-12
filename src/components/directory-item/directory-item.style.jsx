import styled from 'styled-components';

import color from '../../assets/styled/color';

export const DirectoryItemContainer = styled.div`
  display: flex;
  overflow: hidden;
  min-width: 30%;
  height: 15rem;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
`;
export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${({ url }) => `url(${url})`};
  background-position: center;
  background-size: cover;
  transition: transform 350ms ease-out;
  ${DirectoryItemContainer}:hover & {
    transform: scale(1.1);
    transition: transform 1s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`;

export const Body = styled.div`
  cursor: pointer;
  position: absolute;
  display: flex;
  height: 5.625rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1.5625rem;
  border: 1px solid black;
  background-color: ${color.white};
  opacity: 0.7;
  ${DirectoryItemContainer}:hover & {
    opacity: 0.9;
  }
  h2 {
    margin: 0 0.375rem;
    color: ${color.black};
    font-size: 1.375rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  p {
    font-size: 1rem;
    font-weight: lighter;
  }
`;

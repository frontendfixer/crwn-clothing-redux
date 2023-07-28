import styled from 'styled-components';

import color from '../../assets/styled/color';

export const BaseButton = styled.button`
  cursor: pointer;
  padding: 8px 30px;
  background-color: ${color.black};
  color: ${color.white};
  font-size: 16px;
  text-transform: uppercase;
  border: none;
  display: flex;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: 6px;
  transition: all 250ms ease-in-out;

  &:hover {
    background-color: ${color.white};
    color: ${color.black};
    border: 1px solid ${color.black};
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: ${color.google};
  color: ${color.white};

  &:hover {
    background-color: #2a64c0;
    color: ${color.white};
    border-color: transparent;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: ${color.white};
  color: ${color.black};
  border: 1px solid ${color.black};

  &:hover {
    background-color: ${color.black};
    color: ${color.white};
  }
`;

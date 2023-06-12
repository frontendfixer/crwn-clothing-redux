import styled, { css } from 'styled-components';

import color from '../../assets/styled/color';

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${color.black};
`;

export const InputLabel = styled.label`
  position: absolute;
  top: 0.625rem;
  left: 0.3125rem;
  color: ${color.black};
  font-size: 1rem;
  font-weight: normal;
  pointer-events: none;
  transition: 300ms ease all;

  ${({ shrink }) => shrink && shrinkLabelStyles}
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.625rem 0.625rem 0.625rem 0.3125rem;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${color.black};
  margin: 1.5625rem 0;
  background: none;
  color: ${color.black};
  font-size: 1.125rem;
  &:focus {
    outline: none;
  }
  &:focus ~ ${InputLabel} {
    ${shrinkLabelStyles};
  }
`;

export const Group = styled.div`
  position: relative;
  margin: 2.8125rem 0;
`;

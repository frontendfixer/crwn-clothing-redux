import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1440px;
  padding-inline: 30px;
  align-items: center;
  justify-content: space-between;
  margin-block-end: 10px;
  margin-block-start: 20px;
  margin-inline: auto;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  width: 4.375rem;
  align-items: center;
  justify-content: center;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
`;

export const NavLink = styled(Link)`
  position: relative;
  padding-block: 0.125rem;
  color: hsl(0 0% 13%);
  cursor: pointer;
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;
  transition: 250ms;

  &:hover {
    color: hsl(240 52% 53%);
  }

  &::before {
    position: absolute;
    bottom: 0;
    left: 0;
    display: inline-block;
    width: 100%;
    height: 0.125rem;
    background-color: hsl(240 52% 53%);
    content: '';
    transform: scale(0);
    transform-origin: right;
    transition: transform 350ms ease;
  }

  &:hover::before {
    transform-origin: left;
    transform: scale(1);
  }
`;

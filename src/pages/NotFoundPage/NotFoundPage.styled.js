import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavLinkNotFound = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  color: #7bd4eb;
  font-size: 25px;
  font-weight: 200;
  margin: 20px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px 1px #7bd4eb;
`;

export const DivStyled = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextStyled = styled.p`
  font-size: 30px;
  text-align: center;
`;

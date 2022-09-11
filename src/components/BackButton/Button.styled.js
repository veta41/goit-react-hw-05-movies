import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Btn = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  color: #7bd4eb;
  font-size: 25px;
  font-weight: 200;
  margin: 20px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px 1px #7bd4eb;
  &.active {
    color: #eb8015;
    box-shadow: 0 0 13px 3px #eb8015;
`;

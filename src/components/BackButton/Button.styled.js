import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Btn = styled(NavLink)`
  width: 40px;
  margin-bottom: 20px;
  display: block;
  padding: 10px;
  text-decoration: none;
  border: 1px solid transparent;
  background-color: blue;
  color: #fff;
  transition: all 250 linear;
  border-radius: 4px;
  &:hover {
    color: blue;
    background-color: #fff;
    border: 1px solid blue;
  }
`;

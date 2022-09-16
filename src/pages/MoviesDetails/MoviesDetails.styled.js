import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  color: #7bd4eb;
  font-size: 25px;
  font-weight: 500;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px 1px #7bd4eb;
  &.active {
    color: #eb8015;
    box-shadow: 0 0 13px 3px #eb8015;
  }
`;

export const MovieH2 = styled.h2`
  color: #7bd4eb;
`;

export const MovieH3 = styled.h3`
  color: #7bd4eb;
  display: flex;
`;

export const MovieListDetails = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const MovieItemDetails = styled.div`
  display: flex;
  gap: 25px;
  justify-content: center;
`;

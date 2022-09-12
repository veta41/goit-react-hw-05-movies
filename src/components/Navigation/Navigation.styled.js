import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 16px;
  background-color: #6b6967;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid #7bd4eb;
  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
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
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

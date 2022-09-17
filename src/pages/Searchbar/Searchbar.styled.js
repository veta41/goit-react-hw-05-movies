import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { MdImageSearch } from 'react-icons/md';

const Content = styled.div`
  min-height: calc(100vh - 70px);
`;

const SearchHeader = styled.div`
  display: flex;
  justify-content: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  flex-direction: column;
  background-color: transparent;
`;
const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;

  &:hover {
    box-shadow: 0 0 13px 3px #7bd4eb;
  }
`;

const SearchBtn = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;

  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;

const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const TextStyled = styled.p`
  font-size: 30px;
  text-align: center;
  height: 500px;
`;

export const NavLinkSeachBar = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  color: #7bd4eb;
  font-size: 25px;
  font-weight: 500;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px 1px #7bd4eb;
`;

export const Icon = styled(MdImageSearch)`
  width: 35px;
  height: 35px;
  fill: #7bd4eb;
`;

export { SearchHeader, SearchBtn, SearchForm, SearchInput, Content };

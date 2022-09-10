import propTypes from 'prop-types';
import { Title } from './Header.styled';

export function Header({ text }) {
  return <Title>{text}</Title>;
}

Header.propTypes = {
  text: propTypes.string.isRequired,
};

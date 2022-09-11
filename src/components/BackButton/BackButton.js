// import propTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Btn } from './Button.styled';

export default function BackButton() {
  const location = useLocation();
  return (
    <Btn type="button" to={location?.state?.from ?? '/'}>
      Go Back
    </Btn>
  );
}

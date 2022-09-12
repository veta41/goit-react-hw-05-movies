import { NavLinkNotFound, DivStyled, TextStyled } from './NotFoundPage.styled';

export default function NotFound() {
  return (
    <DivStyled>
      <div>
        <TextStyled>
          Oooops, page not found
          <NavLinkNotFound to="/goit-react-hw-05-movies/">
            to Home
          </NavLinkNotFound>
        </TextStyled>
      </div>
    </DivStyled>
  );
}

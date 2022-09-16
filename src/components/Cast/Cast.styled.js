import styled from 'styled-components';

export const Img = styled.img`
  width: 300px;
  height: 400px;

  box-shadow: 0 0 10px 1px #7bd4eb;
  cursor: pointer;
  transform: scale(0.9);
  transition: all 250ms linear;

  &:hover,
  &:focus {
    transform: scale(1);
    box-shadow: 0 0 10px 1px #eb8015;
  }
`;

export const CastGallery = styled.ul`
  display: grid;
  flex-basis: calc(100% / 4 -20px);
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
  margin: 20px auto 0px;
  padding: 0px;
  list-style: none;
`;

export const CastCardContain = styled.div`
  text-align: center;
`;

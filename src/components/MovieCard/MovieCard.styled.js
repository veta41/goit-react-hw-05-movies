import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  gap: 20px;
`;

export const Desc = styled.div`
  padding: 20px;
`;

export const Img = styled.img`
  width: 300px;
  border-radius: 10px;
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

export const MovieH2 = styled.h2`
  color: #7bd4eb;
  padding-bottom: 5px;
`;

export const MovieH3 = styled.h3`
  color: #7bd4eb;
  padding-bottom: 5px;
  padding-top: 20px;
`;

export const MovieDetail = styled.p`
  color: #191b1f;
  font-size: 20px;
  font-weight: 400;
`;

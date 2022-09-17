import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  flex-basis: calc(100% / 4 -20px);
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
  margin: 20px auto 0px;
  padding: 0px;
  list-style: none;
`;

export const Title = styled.p`
  display: flex;
  padding: 5px;
  font-size: 25px;
  font-weight: 700;
  color: #151a17;
  justify-content: center;
  transition: all 250ms linear;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0 0 10px 1px #7bd4eb;
  cursor: pointer;
  transform: scale(0.9);
  transition: all 250ms linear;

  &:hover,
  &:focus {
    transform: scale(1);
    box-shadow: 0 0 10px 1px #f2820a;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 400px;
  border-radius: 10px;
`;

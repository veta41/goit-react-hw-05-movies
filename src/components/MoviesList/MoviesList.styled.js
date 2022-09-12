import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  flex-basis: calc((100% - 120px) / 3);
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
  margin: 20px auto 0px;
  padding: 0px;
  list-style: none;
`;

export const Title = styled.p`
  display: flex;
  padding: 5px;
  font-weight: bold;
  font-weight: 700;
  color: #7bd4eb;
  justify-content: center;
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
`;

export const Img = styled.img`
  width: 300px;
  height: 450px;
  border-radius: 10px;
`;

import styled from 'styled-components';

export const Gallery = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
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
  transition: transform var(--animation-duration) var(--timing-function);
  &:hover {
    box-shadow: 0 0 13px 3px #de14b9;
    transform: scale(1.03);
  }
`;

export const Title = styled.p`
  display: flex;
  padding: 5px;
  color: #de14b9;
`;

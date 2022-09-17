import styled from 'styled-components';

const sizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};
export const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

export const Card = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;

  @media ${devices.laptop} {
    max-width: 800px;
    flex-direction: row;
    align-content: space-between;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
  }

  @media ${devices.desktop} {
    max-width: 1400px;
  }
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
  color: #01020d;
  font-size: 20px;
  font-weight: 400;
`;

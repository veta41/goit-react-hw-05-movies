import styled from 'styled-components';
import { BsGithub } from 'react-icons/bs';
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

export const FooterContainer = styled.footer`
  display: flex;
  flex-shrink: 0;
`;

export const FooterData = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  text-align: center;
  color: #7bd4eb;
  box-shadow: 0 0 10px 1px #7bd4eb;
`;

export const FooterIcon = styled(BsGithub)`
  margin-left: 5px;
  color: #0a16f2;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  transform: scale(0.9);
  transition: all 250ms linear;

  &:hover {
    transform: scale(1.3);
    box-shadow: 0 0 13px 3px #0a16f2;
  }
`;

export const FooterSpan = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #dce1e3;

  @media ${devices.laptop} {
    font-size: 25px;
  }
`;

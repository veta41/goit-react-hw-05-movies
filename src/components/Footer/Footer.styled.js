import styled from 'styled-components';
import { BsGithub } from 'react-icons/bs';

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
  color: #eb700c;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  transform: scale(0.9);
  transition: all 250ms linear;

  &:hover {
    transform: scale(1.3);
    box-shadow: 0 0 13px 3px #eb700c;
  }
`;

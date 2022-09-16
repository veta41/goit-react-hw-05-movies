import {
  FooterContainer,
  FooterData,
  FooterIcon,
  FooterSpan,
} from './Footer.styled';

export default function Footer() {
  return (
    <FooterContainer>
      <FooterData>
        <FooterSpan> © 2022 | All Rights Reserved | Developed by</FooterSpan>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/veta41"
        >
          <FooterIcon />
        </a>
      </FooterData>
    </FooterContainer>
  );
}

import styled from 'styled-components';

import InstagramIcon from './images/Instagram_Glyph_Gradient.svg';
import GitHubMark from './images/github-mark.svg';
import LinkedInIcon from './images/linkedin.png';

const Style = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1.25em;
  align-items: center;
  padding: 0.5em 2em;
  border-radius: 999em;
  background-color: white;

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 2em;
      height: 2em;
    }
  }
`;

export const SocialLinks = () => (
  <Style>
    <a
      href='https://www.instagram.com/zack_beach/'
      target='_blank'
      rel='noreferrer'
    >
      <img src={InstagramIcon} alt='Instagram' />
    </a>
    <a href='https://github.com/zbeach' target='_blank' rel='noreferrer'>
      <img src={GitHubMark} alt='GitHub' />
    </a>
    <a
      href='https://www.linkedin.com/in/zbeach/'
      target='_blank'
      rel='noreferrer'
    >
      <img src={LinkedInIcon} alt='LinkedIn' />
    </a>
  </Style>
);

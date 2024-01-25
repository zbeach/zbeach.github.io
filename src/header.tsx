import styled from 'styled-components';
import ZackImg from './images/zack.jpg';
import InstagramIcon from './images/Instagram_Glyph_Gradient.svg';
import GitHubMark from './images/github-mark.svg';
import LinkedInIcon from './images/linkedin.png';

const Style = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 3em 3em 1em 3em;
  background-color: #fff;
`;

const MainArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1em;
  max-width: 100%;
  color: var(--primary-color);

  @media (max-width: 48.5em) {
    flex-direction: column;
    align-items: center;
    padding-top: 3em;
  }
`;

const ProfileImg = styled.img`
  width: 16em;
  height: 16em;
  border-radius: 7.5em;
  border-style: solid;
  border-color: var(--secondary-color);
  border-width: 0.5em;
  margin: 1em;
  transform: rotate(4deg);

  @media (max-width: 48.5em) {
    width: 12em;
    height: 12em;
    border-radius: 5.625em;
  }

  @media (max-width: 37em) {
    width: 10em;
    height: 10em;
    border-radius: 4.6875em;
  }
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  transform: rotate(-2deg);
`;

const NameHeader = styled.div`
  font-family: 'Bricolage Grotesque';
  font-size: 8em;
  font-weight: 900;
  margin: 0;

  @media (max-width: 48.5em) {
    font-size: 6em;
  }

  @media (max-width: 37em) {
    font-size: 3em;
  }
`;

const AccompanyingText = styled.div`
  font-family: 'Instrument Serif';
  font-size: 2em;
  margin: 0;

  @media (max-width: 37em) {
    font-size: 1.5em;
  }
`;

const ExternalLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1em;
  align-self: flex-end;

  img {
    width: 2em;
    height: 2em;
  }

  transform: rotate(2deg);
`;

export const Header = () => (
  <Style>
    <MainArea>
      <TextArea>
        <NameHeader>{'Zack Beach'}</NameHeader>
        <AccompanyingText>
          I'm an urbanism advocate and software developer in Blacksburg,
          Virginia, USA.
        </AccompanyingText>
      </TextArea>
      <ProfileImg src={ZackImg} alt='Zack Beach' />
    </MainArea>
    <ExternalLinks>
      <a href='https://www.instagram.com/zack_beach/'>
        <img src={InstagramIcon} />
      </a>
      <a href='http://github.com/zbeach'>
        <img src={GitHubMark} />
      </a>
      <a href='https://www.linkedin.com/in/zbeach/'>
        <img src={LinkedInIcon} />
      </a>
    </ExternalLinks>
  </Style>
);

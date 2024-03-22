import styled from 'styled-components';
import ZackImg from './images/zack.jpg';
import InstagramIcon from './images/Instagram_Glyph_Gradient.svg';
import GitHubMark from './images/github-mark.svg';
import LinkedInIcon from './images/linkedin.png';
import { Content } from './content';

type HeaderVariant = 'big' | 'small';

type Props = {
  variant: HeaderVariant;
};

const Style = styled.div`
  display: flex;
  justify-content: center;
  padding: 3em 3em 1em 3em;
  background-color: var(--primary-color);
`;

const MainArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1em;
  max-width: 100%;
  color: var(--default-tertiary-color);

  @media (max-width: 48.5em) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProfileImg = styled.img`
  width: 16em;
  height: 16em;
  border-radius: 7.5em;
  border-style: solid;
  border-color: var(--default-tertiary-color);
  border-width: 0.5em;
  box-shadow: 8px 8px 0px 0px rgba(0, 0, 0, 0.8);
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
  gap: 1em;

  transform: rotate(-2deg);
`;

const NameHeader = styled.div<Props>`
  font-family: 'Spot';
  line-height: 0.9em;
  margin: 0;

  ${({ variant }) =>
    variant === 'big'
      ? `
    font-size: 8em;

    @media (max-width: 48.5em) {
      font-size: 6em;
    }

    @media (max-width: 37em) {
      font-size: 6em;
    }
  `
      : `
    font-size: 4em;
  `}
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
  align-items: center;
  padding: 0.5em 1.25em;
  border-radius: 999em;
  background-color: var(--default-tertiary-color);
  box-shadow: 8px 8px 0px 0px rgba(0, 0, 0, 0.8);

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

export const Header = ({ variant }: Props) => (
  <Style>
    <Content>
      <MainArea>
        <TextArea>
          <NameHeader {...{ variant }}>{'Zack Beach'}</NameHeader>
          {variant === 'big' && (
            <AccompanyingText>
              I'm an urbanism advocate and software developer in Blacksburg,
              Virginia, USA.
            </AccompanyingText>
          )}
        </TextArea>
        {variant === 'big' && <ProfileImg src={ZackImg} alt='Zack Beach' />}
      </MainArea>
      <ExternalLinks>
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
      </ExternalLinks>
    </Content>
  </Style>
);

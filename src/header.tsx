import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import BackgroundImg from './images/pattern.png';
import { Content } from './content';

type HeaderVariant = 'big' | 'small';

type Props = {
  variant: HeaderVariant;
};

const Style = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: ${({ variant }) => variant === 'small' ? '3em' : '4em'} 3em;
  background-color: rgba(var(--primary-color), 1);
  background-image: linear-gradient(
      to bottom,
      rgba(var(--primary-color), 0.9),
      rgba(var(--primary-color), 0.9)
    ),
    url(${BackgroundImg});
  background-size: 40em;
  background-repeat: repeat;
  background-attachment: fixed;
`;

const MainArea = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1em;
  max-width: 100%;
  color: rgba(var(--default-tertiary-color), 1);

  @media (max-width: 48.5em) {
    flex-direction: column;
    align-items: center;
  }
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1em;

  transform: rotate(-2deg);
`;

const NameHeader = styled(Link)<Props>`
  font-family: 'Spot';
  line-height: 0.9em;
  margin: 0;
  text-decoration: none;
  color: rgba(var(--default-tertiary-color), 1);

  ${({ variant }) =>
    variant === 'big'
      ? css`
          font-size: 8em;

          @media (max-width: 48.5em) {
            font-size: 6em;
          }

          @media (max-width: 37em) {
            font-size: 6em;
          }
        `
      : css`
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

export const Header = ({ variant }: Props) => (
  <Style {...{ variant }}>
    <Content>
      <MainArea {...{ variant }}>
        <TextArea>
          <NameHeader to='/' {...{ variant }}>
            {'Zack Beach'}
          </NameHeader>
          {variant === 'big' && (
            <AccompanyingText>
              Urbanism advocate and software developer in Blacksburg, Virginia,
              USA
            </AccompanyingText>
          )}
        </TextArea>
      </MainArea>
    </Content>
  </Style>
);

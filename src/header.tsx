import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import BackgroundImg from './images/pattern.png';
import { Content } from './content';

type HeaderVariant = 'big' | 'small';

type Props = {
  variant: HeaderVariant;
};

const Style = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 5em 3em;
  background-color: rgba(var(--primary-color), 1);
  background-image: linear-gradient(
      to bottom,
      rgba(var(--primary-color), 1),
      rgba(var(--primary-color), 0.4)
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

const ProfileImg = styled.img`
  width: 16em;
  height: 16em;
  border-radius: 7.5em;
  border-style: solid;
  border-color: rgba(var(--default-tertiary-color), 1);
  border-width: 0.5em;
  box-shadow: 12px 12px 0px 0px rgba(150, 179, 157, 1),
    11px 11px 0px 0px rgba(150, 179, 157, 1),
    10px 10px 0px 0px rgba(150, 179, 157, 1),
    9px 9px 0px 0px rgba(150, 179, 157, 1),
    8px 8px 0px 0px rgba(150, 179, 157, 1),
    7px 7px 0px 0px rgba(150, 179, 157, 1),
    6px 6px 0px 0px rgba(150, 179, 157, 1),
    5px 5px 0px 0px rgba(150, 179, 157, 1),
    4px 4px 0px 0px rgba(150, 179, 157, 1),
    3px 3px 0px 0px rgba(150, 179, 157, 1),
    2px 2px 0px 0px rgba(150, 179, 157, 1),
    1px 1px 0px 0px rgba(150, 179, 157, 1);
  margin: 1em;
  transform: rotate(4deg);
  transition: box-shadow 0.1s ease-in-out, transform 0.1s ease-in-out;

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
  <Style>
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

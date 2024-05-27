import styled from 'styled-components';
import { Header } from '../header';
import { Body } from './body';
import { SocialLinks } from '../social-links';

const Style = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: rgba(var(--secondary-color), 1);
`;

const Centered = styled.div`
  display: flex;
  justify-content: center;
`;

export const Main = () => (
  <Style>
    <Header variant='big' />
    <Centered>
      <Body />
    </Centered>
  </Style>
);

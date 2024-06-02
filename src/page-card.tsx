import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { isMobile } from 'react-device-detect';

import { PageData } from './types';

const Wrapper = styled(Link)`
  ${() =>
    css`
      --rotation: ${4 - Math.random() * 8}deg;
    `};

  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border-radius: calc(2em + 6px);
  text-decoration: none;
  cursor: pointer;
  transform: rotate(var(--rotation));
  transition: box-shadow 0.1s ease-in-out, transform 0.1s ease-in-out;

  &.desktop:hover {
    transform: scale(1.01) rotate(2deg);
    box-shadow: 12px 12px 0px 0px rgba(0, 0, 0, 0.8);
  }

  &.mobile {
    box-shadow: 12px 12px 0px 0px rgba(0, 0, 0, 0.8);
  }
`;

const Style = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  border-color: rgba(var(--primary-color), 1);
  border-style: solid;
  border-radius: 2em;
  border-width: 3px;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: hidden;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  color: rgba(var(--default-tertiary-color), 1);
  background: rgba(var(--primary-color), 1);
  font-size: 1.5em;
  text-align: right;
  font-family: 'Spot';
  padding: 0.25em 0.5em 0.25em 0.25em;
`;

const Icon = styled.div`
  width: 1.75em;
  height: 1.75em;
  font-size: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(var(--default-tertiary-color), 1);
  border-radius: 100%;
`;

const HeaderText = styled.div`
  align-self: flex-end;
`;

const Content = styled.div`
  flex-grow: 1;
  font-family: 'Bricolage Grotesque';
  font-weight: 100;
  font-size: 1.25em;
  background: rgba(var(--default-tertiary-color), 1);
  color: rgba(var(--primary-color), 1);
  padding: 0.75em;
`;

export const PageCard = ({ pageKey, icon, header, description }: PageData) => (
  <Wrapper className={isMobile ? 'mobile' : 'desktop'} to={`/${pageKey}`}>
    <Style>
      <Header>
        <Icon>{icon}</Icon>
        <HeaderText>{header}</HeaderText>
      </Header>
      <Content>{description}</Content>
    </Style>
  </Wrapper>
);

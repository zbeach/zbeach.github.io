import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { PageData } from './types';

const Wrapper = styled(Link)`
  --rotation: ${() =>
    css`
      ${Math.random() * 6 - 2}deg
    `};

  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border-radius: calc(2em + 6px);
  text-decoration: none;
  transform: rotate(var(--rotation));
  transition: box-shadow 0.1s ease-in-out, transform 0.1s ease-in-out;

  &:hover {
    transform: scale(1.01) rotate(2deg);
    box-shadow: 12px 12px 0px 0px rgba(0, 0, 0, 0.8);
    cursor: pointer;
  }

  // This is where it becomes one column. No need for rotation on the grid at this width.
  @media (max-width: 43.4375em) {
    transform: rotate(calc(var(--rotation) - 2deg));
  }
`;

const Style = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  border-color: var(--primary-color);
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
  color: var(--default-tertiary-color);
  background: var(--primary-color);
  font-size: 1.5em;
  text-align: right;
  font-family: 'Spot';
  padding: 0.25em 0.5em;
`;

const Icon = styled.div`
  width: 1.75em;
  height: 1.75em;
  font-size: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--default-tertiary-color);
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
  background: var(--default-tertiary-color);
  color: var(--primary-color);
  padding: 0.75em;
`;

export const PageCard = ({ pageKey, icon, header, description }: PageData) => (
  <Wrapper to={`/${pageKey}`}>
    <Style>
      <Header>
        <Icon>{icon}</Icon>
        <HeaderText>{header}</HeaderText>
      </Header>
      <Content>{description}</Content>
    </Style>
  </Wrapper>
);

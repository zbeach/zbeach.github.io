import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  --rotation: ${() =>
    css`
      ${Math.random() * 6 - 2}deg
    `};

  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 6px;
  border-radius: calc(2em + 6px);
  box-shadow: 1px 1px 1px rgb(43, 46, 68);
  transform: rotate(var(--rotation));
  transition: box-shadow 0.1s ease-in-out, transform 0.1s ease-in-out;

  &:hover {
    transform: scale(1.01) rotate(2deg);
    box-shadow: 4px 4px 4px rgb(43, 46, 68);
    cursor: pointer;
  }

  &:active {
    transform: scale(0.99) rotate(2deg);
    box-shadow: 1px 1px 1px rgb(43, 46, 68);
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
  border-color: var(--secondary-color);
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
  color: var(--primary-color);
  background: var(--secondary-color);
  font-size: 1.75em;
  text-align: right;
  font-family: 'Instrument Serif';
  padding: 0.25em 0.5em;
`;

const Icon = styled.div`
  width: 1.75em;
  height: 1.75em;
  font-size: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary-color);
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
  background: var(--primary-color);
  color: var(--secondary-color);
  padding: 0.75em;
`;

export const Section = ({
  icon,
  header,
  description,
}: {
  icon: string;
  header: string;
  description: string;
}) => (
  <Wrapper>
    <Style>
      <Header>
        <Icon>{icon}</Icon>
        <HeaderText>{header}</HeaderText>
      </Header>
      <Content>{description}</Content>
    </Style>
  </Wrapper>
);

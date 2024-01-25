import styled from 'styled-components';

const StripedBorder = styled.div`
  position: absolute;
  top: 0.75em;
  left: 0.75em;
  padding: 0.4em 0;
  background: linear-gradient(
    90deg,
    black 0%,
    black 50%,
    yellow 50%,
    yellow 100%
  );
  border-radius: 0.5em;
  box-shadow: 4px 4px 16px -6px rgba(0, 0, 0, 0.75);
  transform: rotate(3deg);
  background: repeating-linear-gradient(
    -45deg,
    yellow,
    yellow 10px,
    black 10px,
    black 20px
  );
`;

const Style = styled.div`
  position: relative;
  background: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.5em;
  font-family: 'Bricolage Grotesque';
  padding: 0.75em 2em;
`;

export const UnderConstruction = () => (
  <StripedBorder>
    <Style>
      <h1>👷‍♂️ Under Construction</h1>
    </Style>
  </StripedBorder>
);

import Draggable from 'react-draggable';
import styled from 'styled-components';

const StripedBorder = styled.div`
  position: fixed;
  top: 0.75em;
  left: calc(50% - 6.5em);
  width: 15em;
  padding: 0.4em 0;
  background: linear-gradient(
    90deg,
    black 0%,
    black 50%,
    yellow 50%,
    yellow 100%
  );
  border-radius: 0.5em;
  box-shadow: 12px 12px 0px 0px rgba(0, 0, 0, 0.8);
  background: repeating-linear-gradient(
    -45deg,
    yellow,
    yellow 10px,
    black 10px,
    black 20px
  );
`;

const Inside = styled.div`
  position: relative;
  background: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.5em;
  font-family: 'Bricolage Grotesque';
  background-image: radial-gradient(circle, #e9e9b5 1px, transparent 1px),
    radial-gradient(circle, #e9e9b5 1px, transparent 1px);
  /* Size of each dot and spacing between them */
  background-size: 10px 10px;
  /* Position the dots */
  background-position: 0 0, 5px 5px;
  padding: 0.75em 2em;
  cursor: grab;
`;

export const UnderConstruction = () => (
  <Draggable>
    <StripedBorder>
      <Inside>
        <h1>👷‍♂️ Under Construction</h1>
      </Inside>
    </StripedBorder>
  </Draggable>
);

import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  max-width: 66em;
  flex-grow: 1;

  @media (max-width: 48.5em) {
    gap: 0.75em;
  }
`;

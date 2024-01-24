import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Dela Gothic One';
    src: url('./fonts/DelaGothicOne/DelaGothicOne-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Bricolage Grotesque';
    src: url('./fonts/BricolageGrotesque/BricolageGrotesque-VariableFont.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Instrument Serif';
    src: url('./fonts/InstrumentSerif/InstrumentSerif-Regular.ttf') format('truetype');
  }

  body {
    margin: 0;
    padding: 0;
  }
`;

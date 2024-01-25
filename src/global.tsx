import { createGlobalStyle } from 'styled-components';
import DelaGothicOne from './fonts/DelaGothicOne-Regular.ttf';
import BricolageGrotesque from './fonts/BricolageGrotesque-VariableFont.ttf';
import InstrumentSerif from './fonts/InstrumentSerif-Regular.ttf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Dela Gothic One';
    src: url(${DelaGothicOne}) format('truetype');
  }

  @font-face {
    font-family: 'Bricolage Grotesque';
    src: url(${BricolageGrotesque}) format('truetype');
  }

  @font-face {
    font-family: 'Instrument Serif';
    src: url(${InstrumentSerif}) format('truetype');
  }

  body {
    margin: 0;
    padding: 0;
  }
`;

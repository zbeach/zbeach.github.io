import { createGlobalStyle, css } from 'styled-components';
import chroma from 'chroma-js';

import Spot from './fonts/spot-normal.ttf';
import DelaGothicOne from './fonts/DelaGothicOne-Regular.ttf';
import BricolageGrotesque from './fonts/BricolageGrotesque-VariableFont.ttf';
import InstrumentSerif from './fonts/InstrumentSerif-Regular.ttf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Spot';
    src: url(${Spot}) format('truetype');
  }

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

  :root {
    // Colors
    --default-primary-color: 98, 102, 134;
    --default-secondary-color: 208, 235, 215;
    --default-secondary-color-dark: 150, 179, 157;
    --default-tertiary-color: 224, 235, 227;

    --old-default-primary-color: 69, 73, 108;
    --old-default-secondary-color: 197, 193, 158;

    --primary-color: var(--default-primary-color);
    --secondary-color: var(--default-secondary-color);
  }
`;

import { createGlobalStyle, css } from 'styled-components';
import chroma from 'chroma-js';

import Spot from './fonts/spot-normal.ttf';
import DelaGothicOne from './fonts/DelaGothicOne-Regular.ttf';
import BricolageGrotesque from './fonts/BricolageGrotesque-VariableFont.ttf';
import InstrumentSerif from './fonts/InstrumentSerif-Regular.ttf';

const generateRandomColor = (): string => chroma.random().hex();

const ensureContrast = (color1: string, color2: string): boolean =>
  chroma.contrast(color1, color2) >= 4.5;

const generatePalette = () => {
  let primary: string, secondary: string;

  do {
    primary = generateRandomColor();
    secondary = generateRandomColor();
  } while (!ensureContrast(primary, secondary));

  // Ensure primary is darker
  if (chroma(primary).luminance() > chroma(secondary).luminance()) {
    [primary, secondary] = [secondary, primary];
  }

  return css`
    --primary-color: ${primary};
    --secondary-color: ${secondary};
  `;
};

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
    --default-primary-color: rgb(98, 102, 134);
    --default-secondary-color: rgb(208, 235, 215);

    --old-default-primary-color: rgb(69, 73, 108);
    --old-default-secondary-color: rgb(197, 193, 158);

    --primary-color: var(--default-primary-color);
    --secondary-color: var(--default-secondary-color);

    // Maybe someday
    /* ${generatePalette()} */
  }
`;

import styled from 'styled-components';
import { PageCard } from '../page-card';
import { Content } from '../content';

import { PageData } from '../types';

import pagesData from '../data/page.json';

const Style = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2em;
  margin-top: 1em;
  padding: 3em;
  color: var(--primary-color);
`;

const Preface = styled.div`
  font-size: 2em;
  font-family: 'Instrument Serif';

  transform: rotate(-2deg);
`;

const Navigation = styled.div`
  width: 100%;
  display: grid;
  column-gap: 1.5em;
  row-gap: 1.5em;
  align-items: stretch;
  grid-template-columns: repeat(auto-fill, 18em);
  justify-content: center;
  align-content: start;
`;

export const Body = () => (
  <Content>
    <Style>
      <Preface>{'Here are some of the things I do and/or enjoy.'}</Preface>
      <Navigation>
        {(pagesData as PageData[]).map((pageData) => (
          <PageCard {...pageData} />
        ))}
      </Navigation>
    </Style>
  </Content>
);

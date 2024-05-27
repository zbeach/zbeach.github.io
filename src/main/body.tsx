import styled from 'styled-components';
import { PageCard } from '../page-card';
import { Content } from '../content';

import { PageData } from '../types';

import pagesData from '../data/page.json';
import { SocialLinks } from '../social-links';

const Style = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  padding: 3em;
  color: rgba(var(--primary-color), 1);
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
      <Navigation>
        {(pagesData as PageData[]).map((pageData) => (
          <PageCard {...pageData} />
        ))}
      </Navigation>
      <SocialLinks />
    </Style>
  </Content>
);

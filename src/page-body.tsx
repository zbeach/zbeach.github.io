import styled from 'styled-components';
import { Section } from './section';

const Style = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2em;
  margin-top: 1em;
  padding: 3em;
  color: var(--secondary-color);
`;

const Preface = styled.div`
  font-size: 2em;
  font-family: 'Instrument Serif';

  transform: rotate(-2deg);
`;

const InterestsAndWork = styled.div`
  width: 100%;
  display: grid;
  column-gap: 1.5em;
  row-gap: 1.5em;
  align-items: stretch;
  grid-template-columns: repeat(auto-fill, 18em);
  justify-content: center;
  align-content: start;

  transform: rotate(-2deg);

  // This is where it becomes one column. No need for rotation on the grid at this width.
  @media (max-width: 43.4375em) {
    transform: rotate(0deg);
  }
`;

export const PageBody = () => (
  <Style>
    <Preface>{'Here are some of the things I do and/or enjoy.'}</Preface>
    <InterestsAndWork>
      <Section
        icon='🏙️'
        header='Urbanism'
        description="North America's car-centric development pattern is a disaster. Let's fix it!"
      />
      <Section
        icon='🐉'
        header='Learning Mandarin'
        description='你好！我学习中文！'
      />
      <Section
        icon='👨🏼‍💻'
        header='Web development'
        description='I work as a software engineer at a company called Ozmo.'
      />
      <Section icon='🥟' header='Food' description='I love eating very much.' />
      <Section
        icon='💰'
        header='Personal finance'
        description='Sometimes I obsess over budgeting and investing.'
      />
      <Section
        icon='🎮'
        header='Video games'
        description="I play video games. I don't also make them."
      />
    </InterestsAndWork>
  </Style>
);

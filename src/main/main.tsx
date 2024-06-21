import styled from 'styled-components';
import { Body } from './body';
import { useEffect } from 'react';

type Props = {
  onLoad: () => void;
};

const Style = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  background-color: rgba(var(--secondary-color), 1);
`;

const Centered = styled.div`
  display: flex;
  justify-content: center;
`;

export const Main = ({ onLoad }: Props) => {
  useEffect(() => {
    onLoad();
  }, []);

  return (
    <Style>
      <Centered>
        <Body />
      </Centered>
    </Style>
  );
};

import styled from 'styled-components';
import { PageData } from './types';
import { useEffect } from 'react';

type Props = PageData & {
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

export const Page = ({ onLoad }: Props) => {
  useEffect(() => {
    onLoad();
  }, []);

  return (
    <Style>
      <Centered>{''}</Centered>
    </Style>
  );
};

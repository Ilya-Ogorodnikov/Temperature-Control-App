import { FC } from 'react';
import { ControlButton } from '..';
import { useActions } from '../../hooks';

const IncrementButton: FC = () => {
  const { increment } = useActions();

  return <ControlButton onClick={increment}>+</ControlButton>;
};

export default IncrementButton;

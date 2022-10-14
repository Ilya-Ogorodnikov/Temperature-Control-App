import { FC } from 'react';
import { ControlButton } from '..';
import { useActions } from '../../hooks';

const DecrementButton: FC = () => {
  const { decrement } = useActions();

  return <ControlButton onClick={decrement}>-</ControlButton>;
};

export default DecrementButton;

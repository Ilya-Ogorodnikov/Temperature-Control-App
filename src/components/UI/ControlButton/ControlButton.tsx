import { FC } from 'react';
import { IControlButtonProps } from '../../../models';
import './style.scss';

const ControlButton: FC<IControlButtonProps> = ({ children, onClick }) => (
  <button className="control__button" onClick={() => onClick()}>
    {children}
  </button>
);

export default ControlButton;

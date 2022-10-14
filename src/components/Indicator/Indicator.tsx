import { FC } from 'react';
import { useTypedSelector } from '../../hooks';
import { backgroundIndicator } from '../../helpers/backgroundIndicator';
import './style.scss';

const Indicator: FC = () => {
  const { temperature } = useTypedSelector(state => state.counterReducer);

  return (
    <div className={`indicator__box ${backgroundIndicator(temperature)}`}>
      <p className="indicator__box-text">
        {temperature} <sup>o</sup>C
      </p>
    </div>
  );
};

export default Indicator;

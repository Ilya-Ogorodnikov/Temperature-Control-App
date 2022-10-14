import { FC } from 'react';
import { ToastContainer } from 'react-toastify';
import { DecrementButton, IncrementButton, Indicator } from './components';
import 'react-toastify/dist/ReactToastify.css';
import './style.scss';

const App: FC = () => (
  <div className="content__container">
    <Indicator />

    <div className="content__container-buttons-section">
      <DecrementButton />

      <IncrementButton />
    </div>

    <ToastContainer />
  </div>
);

export default App;

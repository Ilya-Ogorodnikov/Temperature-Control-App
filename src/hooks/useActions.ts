import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { counterActions } from '../store/slices/counterSlice';

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(
    {
      ...counterActions,
    },
    dispatch,
  );
};

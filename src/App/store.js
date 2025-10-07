
import { configureStore } from '@reduxjs/toolkit';
import patientReducer from '../features/Patient/patientSlice';

export const store = configureStore({
  reducer: {
    patient : patientReducer,
  },
});
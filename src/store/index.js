import { configureStore } from '@reduxjs/toolkit';
import patientReducer from './patientSlice';
import doctorReducer from './doctorSlice';
import hospitalReducer from './hospitalSlice';

export const store = configureStore({
  reducer: {
    patient: patientReducer,
    doctor: doctorReducer,
    hospital: hospitalReducer,
  },
});

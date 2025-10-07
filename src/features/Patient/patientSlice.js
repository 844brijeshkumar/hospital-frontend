// src/features/Patient/patientSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { mockPatient, mockReports } from '../../utils';

const initialState = {
  patient: mockPatient,
  reports: mockReports,
  status: 'idle',
  error: null,
};

const patientSlice = createSlice({
  name: 'patient',
  initialState,
  reducers: {
    // This reducer will add a new report to the beginning of the reports array.
    addReport: (state, action) => {
      state.reports.unshift(action.payload);
    },
  },
});

// Export the action creator so the component can use it
export const { addReport } = patientSlice.actions;

// Export the reducer for the Redux store
export default patientSlice.reducer;
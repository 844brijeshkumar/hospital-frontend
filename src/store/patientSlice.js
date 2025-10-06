import { createSlice } from '@reduxjs/toolkit';
import { mockPatient, mockReports } from '../utils/mockData';

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
    addReport: (state, action) => {
      state.reports.unshift(action.payload);
    },
    setPatient: (state, action) => {
      state.patient = action.payload;
    },
    setReports: (state, action) => {
      state.reports = action.payload;
    },
  },
});

export const { addReport, setPatient, setReports } = patientSlice.actions;
export default patientSlice.reducer;

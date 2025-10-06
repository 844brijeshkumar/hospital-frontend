import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hospital: null,
  doctors: [],
  reports: [],
  status: 'idle',
  error: null,
};

const hospitalSlice = createSlice({
  name: 'hospital',
  initialState,
  reducers: {
    setHospital: (state, action) => {
      state.hospital = action.payload;
    },
    setDoctors: (state, action) => {
      state.doctors = action.payload;
    },
    setReports: (state, action) => {
      state.reports = action.payload;
    },
  },
});

export const { setHospital, setDoctors, setReports } = hospitalSlice.actions;
export default hospitalSlice.reducer;

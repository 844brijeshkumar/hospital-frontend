import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  doctor: null,
  patients: [],
  status: 'idle',
  error: null,
};

const doctorSlice = createSlice({
  name: 'doctor',
  initialState,
  reducers: {
    setDoctor: (state, action) => {
      state.doctor = action.payload;
    },
    setPatients: (state, action) => {
      state.patients = action.payload;
    },
  },
});

export const { setDoctor, setPatients } = doctorSlice.actions;
export default doctorSlice.reducer;

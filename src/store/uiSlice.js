import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'light',
  showProteinModal: false,
  showCarbModal: false,
  showFatModal: false,
  showArrangeModal: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMode: state => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
    toggleProteinModal: state => {
      state.showProteinModal = !state.showProteinModal;
    },
  },
});

export const { toggleMode, toggleProteinModal } = uiSlice.actions;
export default uiSlice.reducer;

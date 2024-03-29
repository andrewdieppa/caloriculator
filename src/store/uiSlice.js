import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'dark',
  showProteinModal: false,
  showCarbModal: false,
  showFatModal: false,
  showArrangeModal: false,
  showAddMealModal: false,
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
    toggleCarbModal: state => {
      state.showCarbModal = !state.showCarbModal;
    },
    toggleFatModal: state => {
      state.showFatModal = !state.showFatModal;
    },
    toggleArrangeModal: state => {
      state.showArrangeModal = !state.showArrangeModal;
    },
    toggleAddMealModal: state => {
      state.showAddMealModal = !state.showAddMealModal;
    },
  },
});

export const {
  toggleMode,
  toggleProteinModal,
  toggleCarbModal,
  toggleFatModal,
  toggleArrangeModal,
  toggleAddMealModal,
} = uiSlice.actions;
export default uiSlice.reducer;

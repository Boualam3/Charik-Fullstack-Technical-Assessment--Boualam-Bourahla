import { createSlice } from "@reduxjs/toolkit";

const modelSlice = createSlice({
  name: "model",
  initialState: {
    ModelisOpen: false,
    ModelType:null,
    assignment:null
  },
  reducers: {
    openModal: (state,action) => {
      state.ModelisOpen = true;
      state.ModelType  = action.payload.ModelType;
      state.assignment = action.payload.assignment
    },
    closeModal: (state) => {
        state.ModelisOpen = false;
        state.ModelType = null;
        state.assignment= null
    }
  },
});

export const { openModal, closeModal } = modelSlice.actions;

export default modelSlice.reducer;

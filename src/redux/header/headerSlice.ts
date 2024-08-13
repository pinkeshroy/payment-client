import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HeaderState {
  heading?: string;
  headingPosition?: "left" | "center" | "right";
  subTitle?: string;
  compOnLeft?: React.ReactNode;
  onLeftCompClick?: () => void;
  compOnRight?: React.ReactNode;
  onRightCompClick?: () => void;
  showHeader: boolean;
}

const initialState: HeaderState = {
  showHeader: true,
  headingPosition: "center",
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    updateHeader: (state, action: PayloadAction<Partial<HeaderState>>) => {
      Object.assign(state, action.payload);
    },
    toggleHeaderVisibility: (state, action: PayloadAction<boolean>) => {
      state.showHeader = action.payload;
    },
  },
});

export const { updateHeader, toggleHeaderVisibility } = headerSlice.actions;
export default headerSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  phone: '',
  code: '',
  isAuthorizing: false,
  isInitialOrder: true,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setCode: (state, action: PayloadAction<string>) => {
      state.code = action.payload;
    },
    setIsAuthorizing: (state, action: PayloadAction<boolean>) => {
      state.isAuthorizing = action.payload;
    },
    setIsInitialOrder: (state, action: PayloadAction<boolean>) => {
      state.isAuthorizing = action.payload;
    },
    logOut: () => {
      return initialState;
    },
  },
});

const { actions, reducer } = authSlice;

export const {
  setName,
  setPhone,
  setCode,
  logOut,
  setIsAuthorizing,
  setIsInitialOrder,
} = actions;

export default reducer;

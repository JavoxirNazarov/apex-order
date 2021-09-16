import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import moment from 'moment';

export interface IOrderProduct {
  UIDProduct: string;
  Key: string;
  Price: number;
  Amount: number;
  Image?: string;
  Product?: string;
}

interface IAddress {
  lat: number;
  lon: number;
  street: string;
}

export interface ILocations {
  UIDStructure: string;
  Structure: string;
  Address: string;
  Image: string;
  Lat: number;
  Lon: number;
}

interface IState {
  products: IOrderProduct[];
  address: IAddress | null;
  orderDate: string;
  selectedStructure: ILocations | null;
}

const initialState: IState = {
  products: [],
  address: null,
  selectedStructure: null,
  orderDate: moment().format(),
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addToBasket: (state, { payload }: PayloadAction<IOrderProduct>) => {
      if (
        state.products.some(
          el => el.UIDProduct === payload.UIDProduct && el.Key === payload.Key,
        )
      ) {
        state.products = state.products.map(el => {
          if (el.UIDProduct === payload.UIDProduct) {
            return { ...el, Amount: el.Amount + 1 };
          }
          return el;
        });
      } else {
        state.products = [...state.products, payload];
      }
    },
    clearBasket: state => {
      state.products = [];
    },
    incrementProduct: (state, { payload }: PayloadAction<number>) => {
      state.products = state.products.map((el, idx) => {
        if (idx === payload) {
          return { ...el, Amount: el.Amount + 1 };
        }
        return el;
      });
    },
    decrementProduct: (state, { payload }: PayloadAction<number>) => {
      const search = state.products.find((_, idx) => idx === payload);

      if (search?.Amount === 1) {
        state.products = state.products.filter((_, idx) => idx !== payload);
      } else {
        state.products = state.products.map((el, idx) => {
          if (idx === payload) {
            return { ...el, Amount: el.Amount - 1 };
          }
          return el;
        });
      }
    },
    setAddress: (state, { payload }: PayloadAction<IAddress>) => {
      state.address = payload;
    },
    setOrderDate: (state, { payload }: PayloadAction<string>) => {
      state.orderDate = payload;
    },
    setSelectedStructure: (state, { payload }: PayloadAction<ILocations>) => {
      state.selectedStructure = payload;
    },
    refreshOrderState: () => {
      return initialState;
    },
  },
});

const { actions, reducer } = orderSlice;

export const {
  clearBasket,
  addToBasket,
  incrementProduct,
  decrementProduct,
  setAddress,
  setOrderDate,
  refreshOrderState,
  setSelectedStructure,
} = actions;

export default reducer;

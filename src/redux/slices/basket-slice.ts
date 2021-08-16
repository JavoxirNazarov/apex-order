import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IBasketProduct {
  UIDProduct: string;
  Key: string;
  Price: number;
  Amount: number;
  Image?: string;
  Product?: string;
}

interface IState {
  products: IBasketProduct[];
}

const initialState: IState = {
  products: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, { payload }: PayloadAction<IBasketProduct>) => {
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
  },
});

const { actions, reducer } = basketSlice;

export const { clearBasket, addToBasket, incrementProduct, decrementProduct } =
  actions;

export default reducer;

import { Dispatch, SetStateAction } from 'react';

export type SettingState<T> = Dispatch<SetStateAction<T>>;

export interface IGroup {
  UIDGroup: string;
  Group: string;
}

export interface IProductsItem {
  UIDProduct: string;
  Product: string;
  Description: string;
  Image: string;
  Price: number;
}

export interface ISauce {
  UIDNomenclature: string;
  image: string;
  Name: string;
  Price: number;
}

export interface IPrice {
  price: number;
  label: string;
}

export interface IProduct {
  isPizza: boolean;
  productInfo: {
    UIDProduct: string;
    Product: string;
    Description: string;
    Sizes: string[];
    Additives: string[];
    Image: string;
    Sauces: ISauce[];
    Prices: IPrice[];
  };
}

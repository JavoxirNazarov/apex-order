import { Dispatch, SetStateAction } from 'react';

export type UserStepsType = 'PHONE' | 'CODE' | 'NAME';

export type SetUserStepType = Dispatch<SetStateAction<UserStepsType>>;

export interface IOrder {
  State: 'Новый' | 'Готовится' | 'НаДоставку' | 'Завершен';
  Goods: {
    UIDNomenclature: string;
    Nomenclature: string;
    Amount: number;
  }[];
  Courier: string;
  CourierPhone: string;
  Time: string;
}

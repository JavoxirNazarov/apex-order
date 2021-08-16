import { Dispatch, SetStateAction } from 'react';

export type UserStepsType = 'PHONE' | 'CODE' | 'NAME';

export type SetUserStepType = Dispatch<SetStateAction<UserStepsType>>;

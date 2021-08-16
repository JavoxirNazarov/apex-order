import React from 'react';
import { UserStepsType } from '../../constants/types';
import Phone from './Phone';
import Code from './Code';
import Name from './Name';
import { SettingState } from '../../utils/types';

type Props = {
  stepName: UserStepsType;
  setStepName: SettingState<UserStepsType>;
  phone: string;
  code: string;
  name: string;
  setPhone: SettingState<string>;
  setCode: SettingState<string>;
  setName: SettingState<string>;
  endingAuthorization: () => void;
};

export const Steps = ({
  stepName,
  setStepName,
  phone,
  setPhone,
  code,
  setCode,
  name,
  setName,
  endingAuthorization,
}: Props) => {
  switch (stepName) {
    case 'PHONE':
      return (
        <Phone setStepName={setStepName} phone={phone} setPhone={setPhone} />
      );
    case 'CODE':
      return <Code setStepName={setStepName} code={code} setCode={setCode} />;
    case 'NAME':
      return (
        <Name
          setStepName={setStepName}
          name={name}
          setName={setName}
          endingAuthorization={endingAuthorization}
        />
      );
    default:
      return (
        <Phone setStepName={setStepName} phone={phone} setPhone={setPhone} />
      );
  }
};

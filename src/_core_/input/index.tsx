import React from 'react';
import { IInputCoreStyled, InputCoreStyled } from './InputCore.styled';

export interface IInputCore extends IInputCoreStyled { }; 

export const InputCore: React.FC<IInputCore> = (props) => {
  return (
    <InputCoreStyled />
  );
};

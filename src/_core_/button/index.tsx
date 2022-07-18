import React from 'react';
import { ButtonCoreStyled, IButtonCoreStyled } from './ButtonCore.styled';

//Para propagar con sus elemetos hijo
export interface IButtonCore extends IButtonCoreStyled { };

const ButtonCore:React.FC<IButtonCore> = (props) => {

  const {className, children, ...rest} = props;

  return (
    <ButtonCoreStyled className={`ButtonCore_Canvas ${className}`} 
      {...{ rest }}
      //clase:
      // {...{props: rest}}
    >
      <button></button>
      <input />
        {children}
    </ButtonCoreStyled>
  );
};

export default ButtonCore;
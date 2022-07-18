import React from 'react';
import { IButtonCore } from '../../_core_/button/index';
import {PrimaryButtonStyled} from './PrimaryButton.styled';

//Extiende de la interface del core, con esas propiedades y declarando nuevas
interface IPrimaryButton extends IButtonCore {
 icon?: React.ReactElement;
};

export const PrimaryButton:React.FC<IPrimaryButton> = (props) => {
  const {icon, children, className, ...rest} = props;
  return (
    <PrimaryButtonStyled 
      className={`PrimaryButton_Canvas ${className}`} 
      {...{props: rest}}
    >
      {icon && <span>{icon}</span>}
      {children}
    </PrimaryButtonStyled>
  );
};

// export default PrimaryButton;
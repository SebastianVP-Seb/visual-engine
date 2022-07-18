import React from 'react';
import { ButtonStyled, IButtonStyled } from './Button.styled';

interface IButton extends IButtonStyled { };

export const Button: React.FC<IButton> = (props) => {
  //se desestructura de izquierda a derecha
  const {className, children, ...rest} = props;
  return (
    <ButtonStyled
      className={`Buton_Canvas ${className}`}
      {...{props: rest}}
    >{children}</ButtonStyled>
  );
};

// export default Button;
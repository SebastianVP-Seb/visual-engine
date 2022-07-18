import styled from 'styled-components';

//extiende de React y de HTML
/*Necesario extender de React, para tener el comportamiento esperado
Entonces se tiene el button de React y el buton del HTML */
export interface IButtonCoreStyled extends 
React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {};

export const ButtonCoreStyled=styled.button<IButtonCoreStyled>`
    width: 3.5rem;
    height: 2.6rem;
    border-radius: 50px;
`;
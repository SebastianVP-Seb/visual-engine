import styled from "styled-components";

export interface IInputCoreStyled extends 
    React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> { };

export const InputCoreStyled=styled.input<IInputCoreStyled>`
    width: 8rem;
    height: 1.7rem;
    border-radius: 50px;
`;
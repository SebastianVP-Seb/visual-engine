import ButtonCore, {IButtonCore } from "../../_core_/button/index";
import styled, { css } from 'styled-components';

type variant = '' | 'primary' | 'secondary' | 'link' | 'success' ;

//Lógica para definir variantes del botón
export interface IButtonStyled extends IButtonCore {
    variant?: variant;
};

//El elemento tsx, no los estilos ts
export const ButtonStyled = styled(ButtonCore)<IButtonStyled>`
    ${({variant})=>{
        switch (variant) {
            case "primary":
                return css`
                `;

            case "secondary":
                return css`
                `;
        
            default:
                break;
        }
    }}

    &::after {
        content: '';
    }
`;
import styled, { css } from "styled-components";
import { IInputCore, InputCore } from "../../_core_/input/index";

type variant = '' | 'primary' | 'secondary' | 'link' | 'success' ;

export interface IInputStyled extends IInputCore {
    variant?: variant;
};

export const InputStyled=styled(InputCore)<IInputStyled>`
    ${({variant})=>{
        switch (variant) {
            case 'primary':
                return css`
                    background-color: black;
                `;
            case 'secondary':
                return css`
                    background-color: greenyellow;
                `;
        }
    }}
`;
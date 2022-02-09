import styled from 'styled-components';


export const EditorWrapper = styled.div`
    position: relative;
    height: 100%;
    width: calc(100% - 10px);

    & .button-format {
        position: absolute;
        right: 5px;
        top: 5px;
        z-index: 20;
        opacity: 0;
        transition: opacity 0.3s;
    }

    &:hover .button-format {
        opacity: 1.0;
    }
`;


export const ThemeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormatButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    right: 60px !important;
`;

export const ButtonWrapper = styled.div``;



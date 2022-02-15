import styled from 'styled-components';

export const AddButtonWrapper = styled.div`

`;

export const DividerLine = styled.div`
    position: absolute;
    height: 2px;
    width: 95%;
    right: 2.5%;
    left: 2.55%;
    background-color: #37414B;
    top: 50%;
    bottom: 50%;
    z-index: -1;
`;

export const AddCellButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const AddCellWrapper = styled.div<{
    forceVisible?: boolean;
}>`
    position: relative;
    transition: 0.15s opacity ease-in-out;
    opacity: ${({ forceVisible }) => forceVisible ? 1 : 0.55};

    &:active {
        opacity: 0 !important; 
        transition: opacity 0s;
    }

    & ${AddButtonWrapper} {
        display: flex;
        justify-content: center;
    };

    & ${AddCellButton} {
        margin: 0 40px;
    }

    &:hover{
        opacity: 1;
    }
`;



export const IconSpacer = styled.span`
    padding-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

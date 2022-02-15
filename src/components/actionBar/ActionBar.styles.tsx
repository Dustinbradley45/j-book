import styled from 'styled-components';

export const ButtonWrapper = styled.div`
    position:absolute;
    top: 0;
    right: 0;
    z-index: 10;
    opacity: 0.5;
    transition: 0.2s opacity ease-in-out;

    &:hover {
        opacity: 1;
    }
`;

export const Button = styled.button`

`;

export const ActionBarWrapper = styled.div`
    width: 100%;
    height: 30px;
    background-color: #37414B;
`;
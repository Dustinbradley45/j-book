import styled from 'styled-components';

export const IFrameWrapper = styled.div`
    width: 50%;
    position: relative;
    height: 100%;
    flex-grow: 1;
    overflow: hidden;

    .react-draggable-transparent-selection &:after {
        content: '';
        top:0;
        bottom:0;
        right:0;
        left:0;
        width: 100%;
        height: 100%;
        background-color: pink;
        position: absolute;
        display: block;
        opacity: 0;
    }
`;

export const PreviewFrame = styled.iframe`
    background-color: #fff;
    height: 100%;
    width: 100%;
`;

export const PreviewError = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;
    color: red;
`;
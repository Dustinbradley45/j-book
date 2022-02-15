import styled from 'styled-components';
import Spinner from "react-activity/dist/Spinner";
import "react-activity/dist/Spinner.css";

export const CodeCellWrapper = styled.div`
    width: 100%;

    .resize-vertical {
        display: flex;
        flex-direction: row;
    }
`;

export const InnerCell = styled.div`
    height: 100%;
    flexDirection: row;
    display: flex;
    justify-content: space-between;
`;

export const LoadingOverlay = styled.div`
    display: flex;
    background-color: #fff;
    justify-content: center;
    align-items: center;
    width: 50%;
`;

export const StyledSpinner = styled(Spinner)`
    animation: fadeIn 0.5s;

      @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

`;
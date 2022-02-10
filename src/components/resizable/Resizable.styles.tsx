import styled from 'styled-components';
import { ResizableBox } from "react-resizable";

export const StyledResizableBox = styled(ResizableBox)`
    margin: 0 auto;
    
    .react-resizable-handle {
        display: block;
        background-color: #37414b;
        background-repeat: no-repeat;
        background-position: 50%;
    }
 
    .react-resizable-handle-s {
        height: 10px;
        width: 100%;
        cursor: row-resize;
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFAQMAAABo7865AAAABlBMVEVHcEzMzMzyAv2sAAAAAXRSTlMAQObYZgAAABBJREFUeF5jOAMEEAIEEFwAn3kMwcB6I2AAAAAASUVORK5CYII=');
    }
 
    .react-resizable-handle-e {
        width: 10px;
        min-width: 10px;
        height: 100%;
        cursor: col-resize;
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==');
    }
`;


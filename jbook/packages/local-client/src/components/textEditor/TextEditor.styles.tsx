import styled from 'styled-components';

export const TextEditorWrapper = styled.div`
    // Because we are bringing in bulma for base styling, the styles are conflicting with the markdown editor.
    .w-md-editor .title {
        line-height: unset;
        font-size: unset;
        font-weight: unset;
        color: #d4d4d4 !important;
    };

    .w-md-editor ul {
        line-height: 1;
    };

    & .w-md-editor-bar svg{
        display: none;
    };

    & .w-md-editor-bar {
        height: 11px;
        width: 100%;
        cursor: row-resize;
        background-color: #37414b;
        background-position: 50%;
        background-repeat: no-repeat;
        position: relative;
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFAQMAAABo7865AAAABlBMVEVHcEzMzMzyAv2sAAAAAXRSTlMAQObYZgAAABBJREFUeF5jOAMEEAIEEFwAn3kMwcB6I2AAAAAASUVORK5CYII=');
    };

    & em {
        font-style: italic;
    };

    & .wmde-markdown hr {
        border-top: 1px solid #dee5ed;
    };

    & .wmde-markdown ol {
        list-style: decimal;
    };
     
    & .w-md-editor-show-live {
        /* Hide menu bar buttons to prevent accidental delete */
        z-index: 20;
    };
    
    & .w-md-editor-toolbar {
        background-color: #37414b;
        border-bottom: 1px solid gray;
    };
    
    & .w-md-editor-toolbar li button {
        color: #d4d4d4;
    };

    & .w-md-editor-content {
        background-color: #202123;
    };


    & .w-md-editor,
    & .w-md-editor .w-md-editor-text-pre {
        color: #d4d4d4;
    };
 
    & .w-md-editor-text-pre .bold {
        color: unset;
    };
    
    & .token.list.punctuation {
        background-color: unset;
    };
`;

export const CardContent = styled.div`

`;
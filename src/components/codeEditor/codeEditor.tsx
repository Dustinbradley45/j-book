import MonacoEditor, { EditorDidMount } from '@monaco-editor/react';
// import monaco from 'monaco-editor';
import { useState, useRef } from 'react';
import prettier from 'prettier';
import parser from 'prettier/parser-babel';
//@ts-ignore 
//@TODO: get syntax highlighting for JSX
// import MonacoJSXHighlighter from 'monaco-jsx-highlighter';
// import traverse from '@babel/traverse';
// import { parse } from '@babel/parser';

import { BsFillSunFill } from 'react-icons/bs';
import { MdOutlineNightlightRound } from 'react-icons/md';
import 'bulmaswatch/superhero/bulmaswatch.min.css';

import { ThemeButton, EditorWrapper, ButtonWrapper, FormatButton } from './CodeEditor.styles';

interface CodeEditorProps {
    initialValue: string;
    onChange(value: string): void;
};

const CodeEditor: React.FC<CodeEditorProps> = ({ initialValue, onChange }) => {
    const [darkTheme, setDarkTheme] = useState<boolean>(true);

    const editorRef = useRef<any>();

    const onEditorDidMount: EditorDidMount = (getValue, monacoEditor) => {
        editorRef.current = monacoEditor;

        monacoEditor.onDidChangeModelContent(() => {
            onChange(getValue());
        });

        monacoEditor.getModel()?.updateOptions({ tabSize: 2 });

    };

    const onFormatClick = () => {
        const unformatted = editorRef.current.getModel().getValue();

        const formatted = prettier.format(unformatted, {
            parser: 'babel',
            plugins: [parser],
            useTabs: false,
            semi: true,
            singleQuote: true,
        }).replace(/\n$/, '');

        editorRef.current.setValue(formatted);
    };

    return (
        <EditorWrapper>
            <ButtonWrapper>
                <FormatButton className="button button-format is-primary is-small" onClick={onFormatClick}>Format</FormatButton>
                <ThemeButton className="button button-format is-primary is-small" onClick={() => setDarkTheme(!darkTheme)}>
                    {
                        darkTheme ?
                            <BsFillSunFill /> :
                            <MdOutlineNightlightRound />
                    }
                </ThemeButton>
            </ButtonWrapper>
            <MonacoEditor
                height="500px"
                theme={darkTheme ? 'dark' : 'light'}
                language="javascript"
                options={{
                    wordWrap: 'on',
                    minimap: {
                        enabled: false,
                    },
                    showUnused: false,
                    folding: false,
                    lineNumbersMinChars: 3,
                    fontSize: 16,
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                }}
                value={initialValue}
                editorDidMount={onEditorDidMount}
            />
        </EditorWrapper>
    )
};

export default CodeEditor;
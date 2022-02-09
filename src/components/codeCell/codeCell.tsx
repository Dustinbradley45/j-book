import React, { useState } from 'react';

import CodeEditor from './../codeEditor/CodeEditor';
import Preview from './../preview/Preview';
import bundle from './../../bundler';
import { CodeCellWrapper } from './codeCell.styles';


const CodeCell = () => {
    const [code, setCode] = useState<string>('');
    const [input, setInput] = useState<string>('');

    const onClick = async () => {
        const output = await bundle(input);
        setCode(output);
    };


    return (
        <CodeCellWrapper>
            <CodeEditor
                initialValue="const a = 1;"
                onChange={(value: string) => { setInput(value) }}
            />
            <div>
                <button onClick={onClick}>Run Code</button>
            </div>
            <Preview
                code={code}
            />
        </CodeCellWrapper>
    )
};

export default CodeCell;


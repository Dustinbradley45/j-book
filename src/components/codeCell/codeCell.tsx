import React, { useState, useEffect } from 'react';

import CodeEditor from './../codeEditor/CodeEditor';
import Preview from './../preview/Preview';
import bundle from './../../bundler';
import { CodeCellWrapper, InnerCell } from './codeCell.styles';
import Resizable from '../resizable/resizable';

const CodeCell = () => {
    const [code, setCode] = useState<string>('');
    const [input, setInput] = useState<string>('');

    useEffect(() => {
        const timer = setTimeout(async () => {
            const output = await bundle(input);
            setCode(output);
        }, 1000);

        return () => {
            clearTimeout(timer);
        };

    }, [input])

    return (
        <CodeCellWrapper>
            <Resizable direction='y'>
                <InnerCell data-id="innercell">
                    <Resizable direction='x'>
                        <CodeEditor
                            data-id="code editor"
                            initialValue="const a = 1;"
                            onChange={(value: string) => { setInput(value) }}
                        />
                    </Resizable>
                    <Preview
                        data-id="preview"
                        code={code}
                    />
                </InnerCell>
            </Resizable>
        </CodeCellWrapper>
    )
};

export default CodeCell;


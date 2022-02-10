import React, { useState, useEffect } from 'react';

import CodeEditor from '../codeEditor/CodeEditor';
import Preview from './../preview/Preview';
import bundle from './../../bundler';
import { CodeCellWrapper, InnerCell } from './codeCell.styles';
// @ts-ignore - something is fucky
import Resizable from '../resizable/Resizable';

const CodeCell = () => {
    const [code, setCode] = useState<string>('');
    const [input, setInput] = useState<string>('');
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const timer = setTimeout(async () => {
            const output = await bundle(input);
            setCode(output.code);
            setError(output.err);
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [input]);

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
                        bundlingStatus={error}
                    />
                </InnerCell>
            </Resizable>
        </CodeCellWrapper>
    )
};

export default CodeCell;


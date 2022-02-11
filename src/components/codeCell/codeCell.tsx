import React, { useState, useEffect } from 'react';

import CodeEditor from '../codeEditor/CodeEditor';
import Preview from './../preview/Preview';
import bundle from './../../bundler';
import { CodeCellWrapper, InnerCell } from './codeCell.styles';
import Resizable from '../resizable/Resizable';
import { Cell } from '../../store';
import { useActions } from '../../hooks/useActions';

interface CodeCellProps {
    cell: Cell
}

const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {
    const [code, setCode] = useState<string>('');
    const [error, setError] = useState<string>('');

    const { updateCell } = useActions()

    useEffect(() => {
        const timer = setTimeout(async () => {
            const output = await bundle(cell.content);
            setCode(output.code);
            setError(output.err);
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [cell.content]);

    return (
        <CodeCellWrapper>
            <Resizable direction='y'>
                <InnerCell data-id="innercell">
                    <Resizable direction='x'>
                        <CodeEditor
                            data-id="code editor"
                            initialValue={cell.content}
                            onChange={(value: string) => { updateCell(cell.id, value) }}
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


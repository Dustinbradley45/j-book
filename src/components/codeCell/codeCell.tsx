import React, { useEffect } from 'react';


import CodeEditor from '../codeEditor/CodeEditor';
import Preview from './../preview/Preview';
import { CodeCellWrapper, InnerCell, LoadingOverlay, StyledSpinner } from './codeCell.styles';
import Resizable from '../resizable/Resizable';
import { Cell } from '../../store';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useCumulativeCode } from '../../hooks/useCumulativeCode';

interface CodeCellProps {
    cell: Cell
}

const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {

    const { updateCell, createBundle } = useActions();
    // @TODO not sure why typescript hates this. 
    // @ts-ignore
    const bundle = useTypedSelector((state) => state.bundles[cell.id]);
    const cumulativeCode = useCumulativeCode(cell.id);

    useEffect(() => {
        if (!bundle) {
            createBundle(cell.id, cumulativeCode);
            return;
        }
        const timer = setTimeout(async () => {
            createBundle(cell.id, cumulativeCode);
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cumulativeCode, cell.id, createBundle]);

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
                    {
                        !bundle || bundle.loading
                            ? <LoadingOverlay data-id="cats">
                                <StyledSpinner color='#df691a' size={100} />
                            </LoadingOverlay>
                            : <Preview
                                data-id="preview"
                                code={bundle.code}
                                bundlingStatus={bundle.err}
                            />
                    }
                </InnerCell>
            </Resizable>
        </CodeCellWrapper>
    )
};

export default CodeCell;


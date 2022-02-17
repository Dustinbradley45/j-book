import { Cell } from "../../store";
import styled from 'styled-components';
import CodeCell from '../codeCell/codeCell';
import TextEditor from '../textEditor/TextEditor';
import ActionBar from '../actionBar/ActionBar';
import { ActionBarWrapper } from '../actionBar/ActionBar.styles';

interface CellListItemProps {
    cell: Cell
}

const CellListItem: React.FC<CellListItemProps> = ({ cell }): JSX.Element => {
    let child: JSX.Element;
    if (cell.type === 'code') {
        child = (
            <>
                <ActionBarWrapper>
                    <ActionBar id={cell.id} />
                </ActionBarWrapper>
                <CodeCell cell={cell} />
            </>
        )
    } else {
        child = (
            <>
                <ActionBar id={cell.id} />
                <TextEditor cell={cell} />
            </>
        )
    }
    return (
        <CellItemWrapper>
            {child}
        </CellItemWrapper>
    )
};

const CellItemWrapper = styled.div`
    position: relative;
    margin: 40px 10px;
`;

export default CellListItem;
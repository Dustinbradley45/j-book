import { Fragment } from 'react';
import { CellListWrapper } from './CellList.styles';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import CellListItem from "../cellListItem/CellListItem";
import AddCell from '../addCell/AddCell';

const CellList: React.FC = (): JSX.Element => {
    //@ts-ignore
    const cells = useTypedSelector(({ cells: { order, data } }) => { return order.map((id: string) => data[id]) });

    const renderedCells = cells.map((cell: any) => (
        <Fragment key={cell.id}>
            <CellListItem cell={cell} />
            <AddCell previousCellId={cell.id} />
        </Fragment>
    ))

    return (
        <CellListWrapper>
            <AddCell forceVisible={cells.length === 0} previousCellId={null} />
            {renderedCells}
        </CellListWrapper>
    )
}

export default CellList;
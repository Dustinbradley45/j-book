import { Fragment } from 'react';

import { useTypedSelector } from "../../hooks/useTypedSelector";
import CellListItem from "../cellListItem/CellListItem";
import AddCell from '../addCell/AddCell';

const CellList: React.FC = (): JSX.Element => {
    //@ts-ignore
    const cells = useTypedSelector(({ cells: { order, data } }) => { return order.map((id: string) => data[id]) });

    const renderedCells = cells.map((cell: any) => (
        <Fragment key={cell.id}>
            <AddCell nextCellId={cell.id} />
            <CellListItem cell={cell} />
        </Fragment>
    ))

    return (
        <>
            {renderedCells}
            < AddCell nextCellId={null} />
        </>
    )
}

export default CellList;
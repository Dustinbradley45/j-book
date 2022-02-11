import { AddCellWrapper, AddCellButton, DividerLine, AddButtonWrapper, IconSpacer } from './AddCell.styles';
import { useActions } from '../../hooks/useActions';
import { AiOutlinePlus } from 'react-icons/ai';

interface AddCellProps {
    nextCellId: string | null;
}

const AddCell: React.FC<AddCellProps> = ({ nextCellId }) => {
    const { insertCellBefore } = useActions();
    return (
        <AddCellWrapper>
            <AddButtonWrapper>
                <AddCellButton className="button is-rounded is-primary is-small" onClick={() => insertCellBefore(nextCellId, 'code')}>
                    <IconSpacer>
                        <AiOutlinePlus size="14px" color="#FFF" />
                    </IconSpacer>
                    Code
                </AddCellButton>
                <AddCellButton className="button is-rounded is-primary is-small" onClick={() => insertCellBefore(nextCellId, 'text')}>
                    <IconSpacer>
                        <AiOutlinePlus size="14px" color="#FFF" />
                    </IconSpacer>
                    Text
                </AddCellButton>
            </AddButtonWrapper>
            <DividerLine></DividerLine>
        </AddCellWrapper>
    )
};

export default AddCell;
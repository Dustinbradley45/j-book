import { AddCellWrapper, AddCellButton, DividerLine, AddButtonWrapper, IconSpacer } from './AddCell.styles';
import { useActions } from '../../hooks/useActions';
import { AiOutlinePlus } from 'react-icons/ai';

interface AddCellProps {
    previousCellId: string | null;
    forceVisible?: boolean;
}

const AddCell: React.FC<AddCellProps> = ({ previousCellId, forceVisible }): JSX.Element => {
    const { insertCellAfter } = useActions();
    return (
        <AddCellWrapper forceVisible={forceVisible}>
            <AddButtonWrapper>
                <AddCellButton className="button is-rounded is-primary is-small" onClick={() => insertCellAfter(previousCellId, 'code')}>
                    <IconSpacer>
                        <AiOutlinePlus size="14px" color="#FFF" />
                    </IconSpacer>
                    Code
                </AddCellButton>
                <AddCellButton className="button is-rounded is-primary is-small" onClick={() => insertCellAfter(previousCellId, 'text')}>
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
import { useActions } from '../../hooks/useActions';
import { ButtonWrapper } from './ActionBar.styles';
import { BsArrowUpShort, BsArrowDownShort } from 'react-icons/bs';
import { AiOutlineDelete } from 'react-icons/ai';
import ActionButton from './ActionButton';

interface ActionBarProps {
    id: string;

}

const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
    const { moveCell, deleteCell } = useActions();
    return (
        <ButtonWrapper>
            <ActionButton clickEvent={() => { moveCell(id, 'up') }}>
                <BsArrowUpShort size="20px" color="#FFF" />
            </ActionButton>
            <ActionButton clickEvent={() => { moveCell(id, 'down') }}>
                <BsArrowDownShort size="20px" color="#FFF" />
            </ActionButton>
            <ActionButton clickEvent={() => { deleteCell(id) }}>
                <AiOutlineDelete size="20px" color="#fff" />
            </ActionButton>
        </ButtonWrapper>
    )
};

export default ActionBar;
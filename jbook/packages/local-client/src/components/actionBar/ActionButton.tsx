import { ReactNode } from "react";
import { Button } from './ActionBar.styles';

interface ActionButtonProps {
    clickEvent: () => void;
    children: ReactNode;

}

const ActionButton: React.FC<ActionButtonProps> = ({ children, clickEvent }) => {

    return (
        <Button className="button button-format is-primary is-small" onClick={clickEvent}>
            {children}
        </Button>
    )
};

export default ActionButton;
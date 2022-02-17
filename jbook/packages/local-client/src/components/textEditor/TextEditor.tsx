import MDEditor from '@uiw/react-md-editor';
import { useState, useEffect, useRef } from 'react';
import { TextEditorWrapper, CardContent } from './TextEditor.styles';
import { Cell } from '../../store';
import { useActions } from '../../hooks/useActions';

interface TextEditorProps {
    cell: Cell
}

const TextEditor: React.FC<TextEditorProps> = ({ cell }) => {
    const [editing, setEditing] = useState<boolean>(false);
    const mdRef = useRef<HTMLDivElement | null>(null);

    const { updateCell } = useActions();

    useEffect(() => {
        const listener = (event: MouseEvent) => {
            if (mdRef.current && event.target && mdRef.current.contains(event.target as Node)) {
                return;
            }
            setEditing(false);
        };

        document.addEventListener('click', listener, { capture: true });

        return () => {
            document.removeEventListener('click', listener, { capture: true });
        }

    }, []);

    if (editing) {
        return (
            <TextEditorWrapper ref={mdRef}>
                <MDEditor value={cell.content} onChange={(v) => updateCell(cell.id, v || '')} />
            </TextEditorWrapper>
        )
    };

    return (
        // card and card-content are coming from bulma design system
        <TextEditorWrapper className="card" onClick={() => setEditing(true)}>
            <CardContent className="card-content">
                <MDEditor.Markdown source={cell.content || 'Click to edit!'} />
            </CardContent>
        </TextEditorWrapper>
    );
};

export default TextEditor;
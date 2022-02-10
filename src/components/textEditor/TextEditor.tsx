import MDEditor from '@uiw/react-md-editor';
import { useState, useEffect, useRef } from 'react';
import { TextEditorWrapper, CardContent } from './TextEditor.styles';

const TextEditor: React.FC = () => {
    const [editing, setEditing] = useState<boolean>(false);
    const [value, setValue] = useState<string>("# Start Typing!");
    const mdRef = useRef<HTMLDivElement | null>(null);

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
                <MDEditor value={value} onChange={(v) => setValue(v || '')} />
            </TextEditorWrapper>
        )
    };

    return (
        // card and card-content are coming from bulma design system
        <TextEditorWrapper className="card" onClick={() => setEditing(true)}>
            <CardContent className="card-content">
                <MDEditor.Markdown source={value} />
            </CardContent>
        </TextEditorWrapper>
    );
};

export default TextEditor;
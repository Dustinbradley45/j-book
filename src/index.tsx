import ReactDOM from 'react-dom';
import { useState, ChangeEvent } from 'react';

const App = (): JSX.Element => {
    const [inputVal, setInputVal] = useState<string>('');
    const [code, setCode] = useState<string>('');

    const onClick = () => {
        console.log(inputVal);
    }
    return (
        <div>
            <textarea
                value={inputVal}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setInputVal(e.target.value)}
            ></textarea>
            <div>
                <button onClick={onClick}>Submit</button>
            </div>
            <pre>{code}</pre>
        </div>
    )
};


ReactDOM.render(<App />, document.querySelector('#root'));
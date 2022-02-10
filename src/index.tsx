import ReactDOM from 'react-dom';
import 'bulmaswatch/superhero/bulmaswatch.min.css';
// import CodeCell from './components/codeCell/codeCell';
import TextEditor from './components/textEditor/TextEditor';

const App = () => {
  return (
    <div>
      {/* <CodeCell /> */}
      <TextEditor />
    </div>
  );
};


ReactDOM.render(<App />, document.querySelector('#root'));

import ReactDOM from 'react-dom';
import 'bulmaswatch/superhero/bulmaswatch.min.css';
// import CodeCell from './components/codeCell/codeCell';
import TextEditor from './components/textEditor/TextEditor';
import { Provider } from 'react-redux';
import { store } from './store/index';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        {/* <CodeCell /> */}
        <TextEditor />
      </div>
    </Provider>
  );
};


ReactDOM.render(<App />, document.querySelector('#root'));

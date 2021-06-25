import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Clock from './components/Clock';
import Message from './components/Message';
import logo from './assets/img/logo192.png';

function App() {
  const counter = useSelector((state) => state.counter);
  const data = useSelector((state) => state.data);

  const dispatch = useDispatch();

  const counterHandler = () => {
    dispatch({
      type: 'INCREMENT',
      payload: <div>You clicked at {new Date().toLocaleTimeString()}</div>,
    });
  };

  return (
    <div className="grid-container">
      <header className="container header">
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <Clock></Clock>
      </header>
      <main className="container around">
        <div className="sidebar">
          <button onClick={counterHandler}>click me</button>
        </div>
        <Message data={data}></Message>
      </main>
      <footer className="container center">
        <h1 className="numclicks">You Clicked {counter} times.</h1>
      </footer>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import LeftSide from './components/LeftSide'
import RightSide from './components/RightSide'

function App() {
  return (
    <div className="app">
      <div className='app__navbar'><Navbar /></div>
      <div className='app__main'>
        <div className='app__main__left'><LeftSide /></div>
        <div className='app__main__right'><RightSide /></div>
      </div>
      <div className='app__footer'>footer</div>
    </div>
  );
}

export default App;

import './App.css';
import Card from './comp/card';

// css comp
import "./comp/Sytle/card.css";
import "./comp/Sytle/container.css";
import "./comp/Sytle/content.css";

function App() {
  return (
    <>
    <div className='up-Border' />
      <div className='Judul'>
        <h1>
          Welcome to Hero Mobile Legend
        </h1>
      </div>
    <Card />
    </>
  );
}

export default App

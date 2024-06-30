import Gallery from './comp/gallery';

// css comp
import './App.css'
import './comp/gallery.css'
import './lightbox.css'

function App() {
  return (
    <>
    <div className='up-Border' />
      <div className='Judul'>
        <h1>
          Welcome to Hero Mobile Legend
        </h1>
      </div>
    <Gallery />
    </>
  );
}

export default App

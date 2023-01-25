import './App.css';
import Navbar from './components/navbar'
import Routing from './components/menubar';

const App=()=> {

  return (
    <>
    <div className="App">
      <Navbar />
      <Routing/>
    </div>
    </>
  );
}

export default App;

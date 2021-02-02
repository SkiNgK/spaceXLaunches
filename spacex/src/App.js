import './App.css';
import Launches from './components/Launches';
import SideBar from './components/Layout/SideBar';

function App() {
  return (
    <div className="App">
      <SideBar/>
      <Launches/>
    </div>
  );
}

export default App;

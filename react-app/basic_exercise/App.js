import './App.css';
import Name from './component/Name'

function App() {
  
  return (
    <div className="App">
      <Name age={10}/>
      <Name age={20}/>
      <Name age={30}/>
    </div>
  );
}

export default App;

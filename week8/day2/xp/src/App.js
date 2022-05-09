import {CarsA,CarsB} from './components/Cars';
import Garage from './components/Garage';
import Events from './components/Events';
import Phone from './components/Phone';
import Color from './components/Color';
import './App.css';

function App() {
  const carinfo = {name: "Ford", model: "Mustang"};

return (
    <div className="App"> 
      <header className="App-header">
      <CarsA model={carinfo.model}/>
      <CarsB model={carinfo}/>
      <Garage size="small" />
      <Events />
      <Phone/>
      <Color/>
      </header>
    </div>
  );
}


export default App;

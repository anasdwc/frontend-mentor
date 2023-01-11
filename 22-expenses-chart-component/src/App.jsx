import './App.css';
import Balance from './components/Balance';
import Logo from './images/logo.svg'
import Data from './data/data.json'
import Summary from './components/Summary';

function App() {
  return (
    <div className="App">
      <h1 className="font-bold text-3xl">Hello World</h1>
      <Balance logo={Logo} />
      <Summary data={Data} />
    </div>
  );
}

export default App;

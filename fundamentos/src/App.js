//Style
import './App.css';

//Components
import Content from './components/Content';
import Header from './components/Header';
import Painel from './components/Painel';

function App() {
  

  return (
    <div className="App">
      <Header />
      <Painel />
      <Content/>
    </div>
  );
}

export default App;

//Style
import { useEffect, useState } from 'react';
import './App.css';

//Components
import Content from './components/Content';
import Header from './components/Header';
import Painel from './components/Painel';

function App() {
  const [active, setActive] = useState(false)
  
  //Verificando se o ciclo foi ativado
  useEffect(() => {
    if(active){
      document.documentElement.style.overflow = "hidden"
      console.log("deu certo")
    }else{
      document.documentElement.style.overflow = "auto"
      console.log("deu errado")
    }
  }, [active]) 

  return (
    <div className="App">
      <Header />
      <Painel />
      <Content setActive={setActive}/>
    </div>
  );
}

export default App;

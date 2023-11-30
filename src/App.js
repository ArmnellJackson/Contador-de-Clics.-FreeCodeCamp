import './App.css';
import FreeCodeCampLogo from './img/freeCodeCamp-logo.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';


function App() {

  const [numClics, setNumClics] = useState(0);

  const aumantarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  const disminuirClics = () => {
    setNumClics(numClics - 1);
  };

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={FreeCodeCampLogo}
          alt='Logo de FreeCodeCamp' />
      </div>

      <div className='contenedor-principal'>
        <Contador numClics={numClics} />

        <Boton
          texto='Aumentar'
          esBotonDeClic={true}
          manejarClic={aumantarClic} />

        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />

        <Boton
          texto='Disminuir'
          esBotonDeClic={true}
          manejarClic={disminuirClics} />
      </div>
    </div>
  );
}

export default App;

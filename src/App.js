import React, { useState } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Mensaje from './componentes/Mensaje';
import Resultado from './componentes/Resultado';
import Spinner from './componentes/Spinner';

function App() {
  // Definir el state
  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState('');
  const [total, guardarTotal] = useState(0);
  const [cargando, guardarCargando] = useState(false);

  const leerCantidad = e => {
    guardarCantidad(parseInt(e.target.value));
  };

  let componente;

  if (cargando) {
    componente = <Spinner />;
  } else if (total === 0) {
    componente = <Mensaje />;
  } else {
    componente = <Resultado total={total} plazo={plazo} cantidad={cantidad} />;
  }

  return (
    <div>
      <Header titulo="Cotizador de Prestamos" cantidad={cantidad} />

      <div className="container">
        <Formulario
          cantidad={cantidad}
          leerCantidad={leerCantidad}
          plazo={plazo}
          guardarPlazo={guardarPlazo}
          guardarTotal={guardarTotal}
          guardarCargando={guardarCargando}
        />
        <div className="mensajes">{componente}</div>
      </div>
    </div>
  );
}

export default App;

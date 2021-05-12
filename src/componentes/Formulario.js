import React, { useState } from 'react';
import { calcularTotal } from '../helpers';

const Formulario = props => {
  const {
    cantidad,
    leerCantidad,
    plazo,
    guardarPlazo,
    guardarTotal,
    guardarCargando,
  } = props;

  // Definir State
  const [error, guardarError] = useState(false);

  // Cuando el usuario hace submit
  const calcularPrestamo = e => {
    e.preventDefault();

    // Validar formulario
    if (cantidad === 0 || plazo === '') {
      guardarError(true);
      return;
    }

    // Eliminar el error
    guardarError(false);

    // Habilitar el spinner
    guardarCargando(true);

    setTimeout(() => {
      // Realizar la cotización
      const total = calcularTotal(cantidad, plazo);

      // Guradar total
      guardarTotal(total);

      // Deshabilitar el spinner
      guardarCargando(false);
    }, 3000);
  };

  return (
    <div>
      <form onSubmit={calcularPrestamo}>
        <div className="row">
          <div>
            <label>Cantidad Prestamo</label>
            <input
              className="u-full-width"
              type="number"
              placeholder="Ejemplo: 3000"
              onChange={leerCantidad}
            />
          </div>
          <div>
            <label>Plazo para Pagar</label>
            <select
              className="u-full-width"
              onChange={e => guardarPlazo(parseInt(e.target.value))}
            >
              <option value="">Seleccionar</option>
              <option value="3">3 meses</option>
              <option value="6">6 meses</option>
              <option value="12">12 meses</option>
              <option value="24">24 meses</option>
            </select>
          </div>
          <div>
            <input
              type="submit"
              value="Calcular"
              className="button-primary u-full-width"
            />
          </div>
        </div>
      </form>

      {error ? (
        <p className="error">Todos los campos son obligatorios</p>
      ) : null}
    </div>
  );
};

export default Formulario;

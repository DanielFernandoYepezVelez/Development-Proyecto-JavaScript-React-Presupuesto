import { useState } from 'react';
import PropTypes from 'prop-types';
import shortId from 'shortid';

import Error from './Error';

const Formulario = ({guardarGasto, guardarCrearGasto}) => {
    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    /* Cuando El Usuario Agrega Un Gasto */
    const agregarGasto = e => {
        e.preventDefault();

        /* Validar */
        if(cantidad < 1 || nombre.trim() === '' || isNaN(cantidad)) {
            guardarError(true);
            return;
        }

        guardarError(false);

        /* Construir El Gasto */
        const gasto = {
            nombre,
            cantidad,
            id: shortId.generate()
        }

        /* Pasar El Gasto Al Componente Principal */
        guardarGasto(gasto);
        guardarCrearGasto(true);

        /* Reset El Formulario */
        guardarNombre('');
        guardarCantidad(0);
    }

    return (
        <form onSubmit={agregarGasto}>
            <h2>Agrega Tus Gatos Aquí</h2>

            { error ? < Error  mensaje='Ambos Campos Son Obligatorios O Presupuesto Incorrecto'/> : null}    

            <div className="campo">
                <label>Nombre Gasto</label>
                <input type="text" className="u-full-width" placeholder="Ej. Transporte" 
                       value={nombre} onChange={e => guardarNombre(e.target.value) } />
            </div>
            
            <div className="campo">
                <label>Cantidad Gastos</label>
                <input type="text" className="u-full-width" placeholder="Ej. Transporte"
                       value={cantidad} onChange={e => guardarCantidad(parseInt(e.target.value)) }   />
            </div>

            <input type="submit" className="button-primary u-full-width" value="Agregar Gasto"/>
        </form>
    );
}
 
Formulario.prototypes = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}

export default Formulario;
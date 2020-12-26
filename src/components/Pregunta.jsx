import { Fragment, useState } from "react";

import Error from './Error';

const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    /* Funciòn Que Lee El Presupuesto */
    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value, 10));
    }

    /* Submit Para Definir El Presupuesto */
    const agregarPresupuesto = e => {
        e.preventDefault();

        /* Validar */
        if (cantidad < 1 || isNaN(cantidad)) {
            guardarError(true);
            return;
        }

        /* Si Pasa La Validación Correctamente */
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
    }

    return ( 
        <Fragment>
            <h2>Coloca Tu Presupuesto</h2>

            { error ? <Error mensaje="El Presupuesto Es Incorrecto" /> : null }

            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca Tu Presupuesto"
                    onChange={definirPresupuesto}
                />

                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </form>
        </Fragment>
     );
}
 
export default Pregunta;
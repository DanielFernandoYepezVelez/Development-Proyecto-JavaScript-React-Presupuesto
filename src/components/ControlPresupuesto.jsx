import { Fragment } from 'react';
import PropTypes from 'prop-types';

import { revisarPresupuesto } from '../helpers/helper';

const ControlPresupuesto = ({presupuesto, restante}) => {
    return (  
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: ${presupuesto}
            </div>

            <div className={revisarPresupuesto(presupuesto, restante)}>
                Restante: ${restante}
            </div>
        </Fragment>
    );
}

ControlPresupuesto.prototypes = {
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
}
 
export default ControlPresupuesto;
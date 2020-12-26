import { useState } from "react";

const Formulario = () => {
    const [state, setstate] = useState(0);

    return (
        <form>
            <h2>Agrega Tus Gatos Aquí</h2>

            <div className="campo">
                <label>Nombre Gasto</label>
                <input type="text" className="u-full-width" placeholder="Ej. Transporte"/>
            </div>
            
            <div className="campo">
                <label>Cantidad Gastos</label>
                <input type="text" className="u-full-width" placeholder="Ej. Transporte"/>
            </div>

            <input type="submit" className="button-primary u-full-width" value="Agregar Gasto"/>
        </form>
    );
}
 
export default Formulario;
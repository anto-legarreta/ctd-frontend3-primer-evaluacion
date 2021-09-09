function Recordatorio(props) {
    const listaDeOpciones = props.historial.map((opcion) => (opcion.toUpperCase()))
    return(
        <div className="recordatorio">
            <h3>Seleccion anterior: {listaDeOpciones.pop()}</h3>
            <h4>Historial de selecciones: </h4>
            <ul>
                {listaDeOpciones.map((opcion, i) => (<li key = {i}>{opcion.toUpperCase()}</li>))}
            </ul>
        </div>
    )
}

export default Recordatorio;
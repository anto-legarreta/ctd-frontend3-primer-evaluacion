import React from "react"
import data from "../data.json"
import Historia from "./Historia";
import Opciones from "./Opciones";
import Recordatorio from "./Recordatorio";

class App extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            historia: data,
            historiaFiltrada: data[0],
            progreso: 1,
            opcion: "",
            historial: [],
        }
        console.log(props);
    }

    componentDidUpdate(prevProps, prevState){
        const id = this.state.progreso.toString() + this.state.opcion
        if (this.state.progreso<=5){
            if (prevState.progreso != this.state.progreso){
                this.setState({historiaFiltrada: this.state.historia.filter(hist => hist.id == id)[0]})
                this.state.historial.push(this.state.opcion)
            }
        }else{
            alert("Fin.")
        }
    }

    actualizarOpciones = (opcionElegida) => this.setState({progreso: this.state.progreso + 1, opcion: opcionElegida})

    render(){
        return(
            <div className="layout">
                <Historia historiaRender = {this.state.historiaFiltrada}/>
                <Opciones opciones = {this.state.historiaFiltrada.opciones} actualizarOpcionesPadre = {this.actualizarOpciones}/>
                <Recordatorio seleccion = {this.state.opcion} historial = {this.state.historial}/>
            </div>
        )
    }
}

export default App;
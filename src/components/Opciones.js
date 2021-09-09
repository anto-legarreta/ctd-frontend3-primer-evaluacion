import React from "react"

class Opciones extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            opcionA: this.props.opciones.a,
            opcionB: this.props.opciones.b
        }
    }

    componentDidUpdate(prevProps){
        if (prevProps.opciones != this.props.opciones) {
            this.setState({opcionA: this.props.opciones.a, opcionB: this.props.opciones.b})
        }
    }

    elegirCamino = (eleccion) => {
        this.props.actualizarOpcionesPadre(eleccion);
    }

    render() {
        return (
            <div className="opciones">
                <div className="opcion">
                    <button className="botones" onClick={() => this.elegirCamino("a")}>A</button>
                    <h2 className="opcion">{this.state.opcionA}</h2>
                </div>
                <div className="opcion">
                    <button className="botones" onClick={() => this.elegirCamino("b")}>B</button>
                    <h2 className="opcion">{this.state.opcionB}</h2>
                </div>
            </div>
        )
    }
}

export default Opciones;
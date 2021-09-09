import React from "react"

class Historia extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            textoHistoria: this.props.historiaRender.historia,
        }
    }

    componentDidUpdate(prevProps){
        if (prevProps.historiaRender.historia !== this.props.historiaRender.historia){
            this.setState({textoHistoria: this.props.historiaRender.historia})
        }
    }

    render() {
        return (
            <h1 className="historia">{this.state.textoHistoria}</h1>
        )
    }
}

export default Historia;
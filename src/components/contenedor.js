import React from "react"
import json from "../api/data"
import Historia from "./historia";
import Opciones from "./opciones";
import Historial from "./historial"

export default class Conteiner extends React.Component {
    constructor() {
        super();
        this.state = {
            historial: [],
            opActual: 1,
            varActual:"",
        };
    }

    opcionA = () => {
        if (this.state.opActual < 5)
        {
            this.setState({opActual: this.state.opActual+1})
            this.setState({varActual: "a"})
            this.state.historial.push("A");
        } else {
            alert("Se acabo el juego amigo!")
        }
        
    }

    opcionB = () => {
        if (this.state.opActual < 5)
        {
            this.setState({opActual: this.state.opActual+1})
            this.setState({varActual: "b"})
            this.state.historial.push("B");
        } else {
            alert("Se acabo el juego amigo!")
        }
        
    }

    buscarPorID = (json,id) => {
        let i = 0;
        while((json[i].id != id) && (i < json.length)) {
            i++;
        }
        return i
    }

    componentDidMount(json){
        alert("Bienvenido a mi juego!");
    }

    render() {
        const data = json;
        return(
            <>
            <Historia historia = {data[this.buscarPorID(data,this.state.opActual+this.state.varActual)].historia}></Historia>
            <Opciones opcion = {data[this.buscarPorID(data,this.state.opActual+this.state.varActual)].opciones} opcionA = {this.opcionA} opcionB = {this.opcionB}/>
            <p>Seleccion anterior: {this.state.historial[this.state.historial.length-1]}</p>
            <Historial lista = {this.state.historial}></Historial>
            </>
        );
    }
}
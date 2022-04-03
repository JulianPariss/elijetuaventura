import React from "react";

export default class Opciones extends React.Component {
    render(){
        const {opcion} = this.props
        const {opcionA} = this.props
        const {opcionB} = this.props
        return(
            <>

            <button onClick={() =>{opcionA()}}>A: {opcion.a}</button>
            {/*<p>{opcion.a}</p>*/}
            <button onClick={() =>{opcionB()}}>B: {opcion.b}</button>
            {/*<p>{opcion.b}</p>*/}
            </>
            
        )
    }
}

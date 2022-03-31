import React from "react";

export default class Historial extends React.Component {
    render(){
        const {lista} = this.props;
        return(
            <ol>
            {lista.map((opcion,key)=> (
                <li key = {key}>{opcion}</li>
            ))}
            </ol>
        );
    }
}
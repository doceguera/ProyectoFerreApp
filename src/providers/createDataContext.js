import React, { useReducer } from "react";

export default (reducer, actions, defaultValue) =>{

    const Provider = ({ children }) =>{
        const [state, dispatch] = useReducer(reducer, defaultValue);

        const boundActions = {};
        
        fro
    }
}
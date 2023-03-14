import React from "react";  

export function Button(props){
    return (
        <>
            {props.characterDesignation}
        </>
    )
}

export function Keypad(props){
    let buttons = [...props.buttons]
    return <>
    {buttons.map(button => <Button characterDesignation = {button}/>)}
    </>
}
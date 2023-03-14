import {React} from "react";  


export function Button(props){

    function handleClick(event) {
        let audio = document.getElementById(props.characterDesignation);
        audio.play();
    }

    return (
        <div className="drum-pad" onClick={handleClick}>
                {props.characterDesignation}
                <audio id={props.characterDesignation} class="clip" src={props.audioClip}></audio>
        </div>
    )
}

export function Keypad(props){
    let buttons = [...props.buttons]
    
    return( 
        <>
            {buttons.map(button => <Button characterDesignation={button.triggerKey} audioClip={button.audioClip}  />)}
        </>
    )
}

// export class Button extends React.Component{

//     constructor(props){
//         super(props);
//     }

//     handleClick = (event) => {
//         let audio = document.getElementById(this.props.characterDesignation);
//         audio.play();
//     }

//     render() {
//         return (
//             <div className="drum-pad" onClick={this.handleClick}>
//                     {this.props.characterDesignation}
//                     <audio id={this.props.characterDesignation} class="clip" src={this.props.audioClip}></audio>
//             </div>
//         )
//     }
// }






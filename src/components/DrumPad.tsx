import React from 'react'

export const DrumPad = (props: any) => {
    function playSound() {
        const el: any = document.getElementById(props.pad.key);
        el?.play();
    }
    return <div>
        <button onClick={playSound}>{props.pad.key}
            <audio id={props.pad.key} src={props.pad.soundDrum}  className='clip'/>
        </button>
    </div>
}
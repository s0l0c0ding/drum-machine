import React from 'react'

export const DrumPad = (props: any) => {
    const key = props.pad.key;
    return <div>
        <button onClick={() => props.parentCallback(key)}>{key}
            <audio id={key} src={props.pad[props.instrument]}  className='clip'/>
        </button>
    </div>
}
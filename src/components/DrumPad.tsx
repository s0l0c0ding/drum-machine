import React from 'react';
import Button from 'react-bootstrap/Button';
import {DrumPadProps} from '../types/DrumPadProps'

export const DrumPad = (props: DrumPadProps) => {
    const key = props.pad.key;
    return <div>
        <Button onClick={() => props.parentCallback(key)} variant="outline-info" size="lg" block>
            {key}
            <audio id={key} src={props.pad[props.instrument]}  className='clip'/>
        </Button>
    </div>
}
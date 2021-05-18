import React from 'react'
import { Key } from './Key.js'
import './Keyboard.css'

class Keyboard extends React.Component {
    render() {
        return (
        <div className="keyboard">
                <Key note="c"/>
                <Key note="db"/>
                <Key note="d"/>
                <Key note="eb"/>
                <Key note="e"/>
                <Key note="f"/>
                <Key note="f#"/>
                <Key note="g"/>
                <Key note="ab"/>
                <Key note="a"/>
                <Key note="bb"/>
                <Key note="b"/>
        </div>
        )
    }
}

export { Keyboard }
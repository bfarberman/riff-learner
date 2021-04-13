import React from 'react'
import { Key } from './Key.js'
import './Keyboard.css'

class Keyboard extends React.Component {
    render() {
        return (
        <div className="keyboard">
                <Key />
                <Key />
                <Key />
        </div>
        )
    }
}

export { Keyboard }
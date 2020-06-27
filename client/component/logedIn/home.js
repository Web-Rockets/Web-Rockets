import React, { Component } from 'react'
import '../../Style.css'

export default class Home extends Component {
    render() {
        return (
            <div className='home'>
                <h1 id="title">Welcome to Web-rockets!</h1>
                <p id='stparagraph'>Web-rocket is a collaboration platform for teams to work and share ideas in realtime through drawings, charting and/or chat.</p>
                <p id='stparagraph'>Web-rocket can also be used to spend time with friends by chatting and playing games. Some games ideas are: tic-tac-toe, pictionary, hangman, just to name a few.</p>
                <p id='stparagraph'>We hope you enjoy this space!</p>
            </div>
        )
    }
}

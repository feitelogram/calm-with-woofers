import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1
                className= "f-headline lh-solid tc"
                >Welcome to Calm With Woofers</h1>
                <h3
                className="f1 lh-title tc"
                >This app is for soothing pics of doggies for a difficult world.</h3>
                <h4
                className="f1 lh-title tc"
                >It's up to you to decide whether dogs are floofy, whether they want pats, or haz borks.</h4>
                <h4
                className="f1 lh-title tc"
                >You may also save woofers to your list by giving your thoughts on them, but only three at a time so choose carefully!</h4>
                <h5
                className="f2 lh-copy tc"
                >We hope these woofers bring you calm and cuteness in this hectic time.</h5>
            </div>
        )
    }
}

import React, {useState} from 'react'

const style = {
    border: "solid yellow 2px",
    display: "inline-block"
}

export default function SearchVenue() {


    return (
        <div style={style}>
            <h1>Search for venues</h1>
            <input type="text"></input>
            <button onClick={SearchVenue}>Search</button>
        </div>
    )
}

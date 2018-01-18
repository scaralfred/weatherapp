import React from "react"
import "./button.css"

const button = (props) => {
    return (
        <div className="btn" onClick={props.clicked}>
            Fetch Weather
        </div>
    )
}

export default button;
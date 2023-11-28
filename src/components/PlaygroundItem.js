import React from 'react'

export const PlaygroundItem = (props) => {

    return (
        <div className="playgrounditemcontainer">
            <img className="playgroundimage" alt="playgroundimage" src={props.image} />
            <div className="playgroundtext">
                <h4 className="playgroundtexttitle">{props.title}</h4>
                <p className="playgroundtextpara">{props.text}</p>
                </div>
        </div>
    )


}
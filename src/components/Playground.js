import React from 'react'
import { PlaygroundItem } from './PlaygroundItem'
import { playgroundConfig } from '../config/config'

export const Playground = (props) => {

    function createItems(arr) {
        return arr.map(i => <PlaygroundItem
                image={i.image}
                title={i.title}
                text={i.text}
                 />)
    }

    return(
        <div className="playground">
            {createItems(playgroundConfig.items)};
        </div>
    )


}
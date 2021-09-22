import React from 'react'
import Continents from './continents'

function World(props){
    //console.log(props.data_world);
    return(
        <div className="world">
            <Continents title="Sub-continents" world={props.data_world} continents={props.data_world.continents} />
        </div>
    )
}

export default World
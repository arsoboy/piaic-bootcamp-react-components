import React from 'react'
import Regions from './regions'

function Continents(props){

    let title = props.title
    let listArray = props.continents
    let continentsListItems = listArray.map( (el) => <li>{el}</li> )

    let regionsList = props.world.regions

    return(
        <div className="component">
            <h3>{title}</h3>
            <ul>
                {continentsListItems}
                <Regions title="Regions" regions={regionsList} />
            </ul>
        </div>
    )
}

export default Continents
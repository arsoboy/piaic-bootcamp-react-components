import React from 'react'

function Regions(props){

    let title = props.title
    let regionsList = props.regions.map( (el)=><li>{el.name} <div class="sub-component"><ul>{el.subregions.map( (elm)=><li>{elm}</li> )}</ul></div> </li> )
    
    return(
        <div className="component">
            <h3>{title}</h3>
            <ul>{regionsList}</ul>
        </div>
    )
}

export default Regions
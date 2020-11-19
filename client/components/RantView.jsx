// Buddah_Chicken & DeathEagle
import React from 'react'



const RantView = (props) => {

  return (
    <div>

      <li>
      {this.props.rant.map(rant => (
            <li key={rant}>{rant}</li>
          ))}
      </li>
    </div>

  )
}


export default RantView
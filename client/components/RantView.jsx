// Buddah_Chicken & DeathEagle
import React from 'react'
// import {getAllRantsAPI} from '../apis/rants'
import rants from '../../server/db/seeds/rants'
import { connect } from 'react-redux'




const RantView = (props) => {
  const rant = props.rant
  //   state = {
  //     rant:'',
  //     author:'',
  // }


  return (
    <div>

      <ul>
      {rant.map(rant => (
            <li key={rant}>{rant}</li>
          ))}
      </ul>
    </div>

  )
}

// reducer with empty state [], map state to props with 
export default RantView
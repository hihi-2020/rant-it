// Buddah_Chicken & DeathEagle
import React from 'react'
import { connect } from 'react-redux'
import { fetchRants } from '../actions/getRants'



const RantView = (props) => {
  // console.log(props)
  return (
    <div>

      <li>
      {props.rants.map(rant => (
            <li key={rant}>{rant}</li>
          ))}
      </li>
    </div>

  )
}


function mapStateToProps (globalState) {
  return {
    userName: globalState.userName,
    rants: globalState.rants
  }
}

export default connect (
  mapStateToProps
)(RantView)

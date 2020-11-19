// Buddah_Chicken & DeathEagle
import React from 'react'
import { connect } from 'react-redux'
import { fetchRants } from '../actions/getRants'

// const rants = 

const RantView = (props) => {
  console.log(props)
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
  fetchRants()
  return {
    userName: globalState.userName,
    rants: globalState.rantView
  }
}

export default connect (
  mapStateToProps
)(RantView)

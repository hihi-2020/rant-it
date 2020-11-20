// Logoloco & Vulpes/Vulpes
import React from 'react'
import { connect } from 'react-redux'
import { fetchRants } from '../actions/home'

// const rants = 

const Home = (props) => {
  console.log(props)
  console.log(props.rants + "/////////////////")
  return (
      <div>

      <ul>
      {props.rants.map(rant => (
            <li key={rant.id}>{rant.title} by </li>
          ))}
      </ul>
    </div>

  )
}


function mapStateToProps (globalState) {
  fetchRants()
  return {
    userName: globalState.userName,
    rants: globalState.home
  }
}

export default connect (
  mapStateToProps
)(Home)

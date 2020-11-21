// class based component

// Logoloco & Vulpes/Vulpes

// big div that is fixed position, clear, then another div like a flexboc thats smack bang in the middle of the page and conditionally renders over the top of home

// Bren seems like he has lots of knowledge on how to do this

import React from 'react'
import { connect } from 'react-redux'
import {Link, useHistory} from "react-router-dom"

import { setUser } from '../actions/userName'

class EnterName extends React.Component {
  state = {
    nameInput: ""
  }
  
  handleChange = (event) => {
    this.setState({
      nameInput: event.target.value
    })
  }

  handleClick = () => {
    this.props.dispatch(setUser(this.state.nameInput))
    this.props.history.push('/home')
  }

  // need a function to handle the cross button for hiding the name input

  render() {
    return (
      <div className = 'entername'>
        <img src="./RANT-IT_DARK (1).svg"/>
        <h2>Enter your Hacker Name</h2>
        <input className ='Title' type="text" onChange={this.handleChange} />
        <br/>
        <button className = 'botton' onClick={this.handleClick} >Next</button>
        {/* <button>x</button> */}
      </div>
    )
  }
}

export default connect()(EnterName)
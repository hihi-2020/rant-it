
import React from 'react'

import {addRant} from '../apis/rants'

export default class CreateRant extends React.Component{
  state = {
    rant:'',
    author:''//from global store
  }

  handleChange = event =>{
    console.log(event.target.value)
    this.setState({
      rant:event.target.value,
      author: this.props.state
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    addRant(this.state)
    .then(()=>{
      this.setState({
        rant:'',
        author:''
      })
    })
  }

render(){
  return(
    <>
    <form>
      <label>rant</label>
      <textarea name="Rant" onChange={this.handleChange} value={this.state.rant}></textarea>
      <button onClick={this.handleSubmit}>Rant-it</button>

    </form>
    </>
  )
}

}
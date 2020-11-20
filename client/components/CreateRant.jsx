
import React from 'react'

import {addRantAPI} from '../apis/rants'
import {connect} from 'react-redux'
import { fetchRants } from '../actions/home'

class CreateRant extends React.Component{
  state = {
    rant:'',
    author:this.props.userName,//from global store
    title:''
  }

  handleChange = event =>{
    
 
    this.setState({
      [event.target.name]:event.target.value,
      author: this.props.userName,
      [event.target.name]:event.target.value
    })
  }

  handleSubmit = event => {
    console.log(this.state)
    event.preventDefault()
    addRantAPI(this.state)
    .then(()=>{
      this.props.dispatch(fetchRants())
      this.setState({
        rant:'',
        author:''
      })
      this.props.history.push('/home')
    })
  }

render(){
  return(
    <>
    <img src="./RANT-IT_DARK (1).svg"/>
    <form className = "form">
      
      <input className = 'Title' type="text" name="title" placeholder='Enter your rant title here' onChange={this.handleChange} value={this.state.title}/>
      
      <textarea className = 'Rant' name="rant" onChange={this.handleChange} value={this.state.rant} placeholder='Rant awayyyy'></textarea>
      
      <button className ='botton' onClick={this.handleSubmit}>Rant-it</button>

    </form>
    </>
  )
}

}

function mapStateToProps (globalState) {
  return {
    userName: globalState.userName
  }
}

export default connect(mapStateToProps)(CreateRant)
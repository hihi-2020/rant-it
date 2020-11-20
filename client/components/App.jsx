import React from 'react'
import { connect } from 'react-redux'

// import { fetchFruits } from '../actions'
import AuthorView from './AuthorView'
import RantView from './RantView'

import EnterName from './EnterName'
import CreateRant from './CreateRant'
import { fetchRants } from '../actions/getRants'

export class App extends React.Component {
  state = {
    rants: []
  }

  componentDidMount = () => {
    this.props.dispatch(fetchRants())
    // .then()
    
    console.log(this.props)
   }

  render () {
    return (
      <div className='app'>
        <EnterName />
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        <ul>
          {/* {this.props.fruits.map(fruit => (
            <li key={fruit}>{fruit}</li>
          ))} */}

          <CreateRant/>
        </ul>
        <RantView />
        {/* <AuthorView /> */}
      </div>
    )
  }
}

function mapStateToProps (globalState) {
  return {
    rants: globalState.rantView
  }
}

export default connect(mapStateToProps)(App)

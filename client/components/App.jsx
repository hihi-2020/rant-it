import React from 'react'
import { connect } from 'react-redux'

import { fetchRants } from '../actions/home'
import AuthorView from './AuthorView'
import RantView from './RantView'
import Home from './Home'

import EnterName from './EnterName'
import CreateRant from './CreateRant'

export class App extends React.Component {
  state = {
    fruits: []
  }

  componentDidMount () {
    this.props.dispatch(fetchRants())
  }

  render () {
    return (
      <div className='app'>
        <EnterName />
        <Home />
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        <ul>
          {/* {this.props.fruits.map(fruit => (
            <li key={fruit}>{fruit}</li>
          ))} */}

          <CreateRant/>
        </ul>
        {/* <RantView /> */}
        {/* <AuthorView /> */}
      </div>
    )
  }
}

function mapStateToProps (globalState) {
  return {
    rants: globalState.rants
  }
}

export default connect(mapStateToProps)(App)

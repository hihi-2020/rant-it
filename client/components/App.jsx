import React from 'react'
import { connect } from 'react-redux'

import { fetchRants } from '../actions/home'
import AuthorView from './AuthorView'
import RantView from './RantView'
import Home from './Home'
import { Link, Route } from 'react-router-dom'

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
        <Route exact path='/' component={EnterName}/>
        <Route exact path='/home' component={Home}/>
        <Route  exact path={`/author/:author`} component={AuthorView}/>
        <Route exact path={'/rant-it'} component={CreateRant}/>
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

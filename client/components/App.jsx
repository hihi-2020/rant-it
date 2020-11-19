import React from 'react'
import { connect } from 'react-redux'

import { fetchFruits } from '../actions'
import AuthorView from './AuthorView'
import RantView from './RantView'

import EnterName from './EnterName'
import CreateRant from './CreateRant'

export class App extends React.Component {
  state = {
    fruits: []
  }

  // componentDidMount () {
  //   this.props.dispatch(fetchFruits())
  // }

  render () {
    return (
      <div className='app'>
        <EnterName />
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        <ul>
          {this.props.fruits.map(fruit => (
            <li key={fruit}>{fruit}</li>
          ))}

          <CreateRant/>
        </ul>
      </div>
    )
  }
}

function mapStateToProps (globalState) {
  return {
    fruits: globalState.fruits
  }
}

export default connect(mapStateToProps)(App)

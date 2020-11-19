// Buddah_Chicken & DeathEagle
import React from 'react'
import {connect} from 'react-redux'

import rants from '../../server/db/seeds/rants'


const AuthorView = (props) => {

  const {rant} = rant

  return (
    <div>
      {this.props.author}
      <li>
      {this.props.author.rant.map(rant => (
            <li key={rant}>{rant}</li>
      ))}
      </li>
    </div>

  )
}


export default AuthorView
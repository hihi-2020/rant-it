// Buddah_Chicken & DeathEagle
import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

import rants from '../../server/db/seeds/rants'


const AuthorView = (props) => {

  // const {rant} = rant

  return (
    <div>
    <Link to={'/'}>Home!</Link>
      <h1>Rants by: {props.match.params.author}</h1>

      {props.rants.filter(rant => rant.author==props.match.params.author).map((rant) => {
        return(
          <div key={rant.id}>
          <h3>{rant.title}</h3>
          <p>{rant.rant}</p>
        </div>
        )
      })}
     

    </div>

  )
}

function mapStateToProps(globalState) {
	return {
		userName: globalState.userName,
		rants: globalState.home,
	};
}

export default connect(mapStateToProps)(AuthorView);

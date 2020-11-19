// Buddah_Chicken & DeathEagle


// BuddahChucken & DeathEagle
import React from 'react'



const AuthorView = (props) => {

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
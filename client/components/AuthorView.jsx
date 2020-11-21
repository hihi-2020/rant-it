// Buddah_Chicken & DeathEagle
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import rants from "../../server/db/seeds/rants";

const AuthorView = (props) => {
  // const {rant} = rant

  return (
    <div>
      <img src="./RANT-IT_DARK (1).svg" />
      <div className="homeLink">
        <Link to={"/"}>Home</Link>
      </div>
      <div className="homeAllRantPosts">
        <h1 id="rantAuthor">Rants by: {props.match.params.author}</h1>

        {props.rants
          .filter((rant) => rant.author == props.match.params.author)
          .map((rant) => {
            return (
              <div key={rant.id}>
                <h3>{rant.title}</h3>
                <p className="singleRant">{rant.rant}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

function mapStateToProps(globalState) {
  return {
    userName: globalState.userName,
    rants: globalState.home,
  };
}

export default connect(mapStateToProps)(AuthorView);

// Logoloco & Vulpes/Vulpes
import React from "react";
import { connect } from "react-redux";
import { fetchRants } from "../actions/home";
import { Link, Route } from "react-router-dom";
import AuthorView from "./AuthorView";

// const rants =

const Home = (props) => {
  return (
    <div className="HomeDisplayPage">
      <img src="./RANT-IT_DARK (1).svg" />
      <div className="writeRantLink">
        <Link to={"/rant-it"}>Write a Rant</Link>
      </div>

      <Route path={`/author/:author`} component={AuthorView} />
      {props.rants.reverse().map((rant) => {
        return (
          <>
            <div className="homeAllRantPosts" key={rant.id}>
              <h3>{rant.title}</h3>
              <p className="singleRant">{rant.rant}</p>
              <br />
              <em className="rantAuthor">
                <Link to={`/author/${rant.author}`}>{rant.author}</Link>
              </em>
              <br />
            </div>
          </>
        );
      })}
    </div>
  );
};

function mapStateToProps(globalState) {
  fetchRants();
  return {
    userName: globalState.userName,
    rants: globalState.home,
  };
}

export default connect(mapStateToProps)(Home);

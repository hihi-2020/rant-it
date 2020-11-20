// Logoloco & Vulpes/Vulpes
import React from 'react';
import { connect } from 'react-redux';
import { fetchRants } from '../actions/home';

// const rants =

const Home = (props) => {
	return (
		<div className ="HomeDisplayPage">
			{props.rants.map((rant) => {
				return (
					<div key={rant.id}>
						<h3>{rant.title}</h3>
						<p className = "singleRant">{rant.rant}</p>
						<p>
							<a className = "rantAuthor"> {rant.author}</a>
						</p>
					</div>
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

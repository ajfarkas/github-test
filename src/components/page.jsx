import React from 'react';
import Login from './login.jsx';
import Repos from './repolist.jsx';
import Issues from './issuelist.jsx';

class PageComponent extends React.Component {
	constructor() {
		super();

		this.headers = {
			Accept: 'application/vnd.github.v3+json',
			'Content-Type': 'application/json',
		};

		this.state = {
			repos: {},
			issues: {},
			activeRepo: null,
		};
	}

	addAuthToken = (oAuthToken) => {
		this.headers.Authorization = `token ${oAuthToken}`;
	}

	updateRepos = (data) => {
		// map repo objects to their id
		this.setState({
			repos: Object.assign({}, ...data.map(repo => ({[repo.id]: repo}))),
		});

	}

	selectRepo = (id) => {
		this.setState({ activeRepo: (id).toString() });
	}

	render() {
		return <div>
			<Login
				addToken={this.addAuthToken}
				headers={this.headers}
				updateRepos={this.updateRepos}
			/>
			<Repos
				repos={this.state.repos}
				selectRepo={this.selectRepo}
				activeRepo={this.state.activeRepo}
			/>
			<Issues
				issues={this.state.issues}
			/>
		</div>;
	}
}

export default PageComponent;

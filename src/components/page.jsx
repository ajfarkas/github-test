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

		this.fetchIssues(this.state.repos[id]);
	}

	fetchIssues = (repo) => {
		const req = new Request(repo.issues_url.replace('{/number}', ''), {
			method: 'GET',
			headers: this.headers,
		});

		fetch(req)
			.then(res => res.json())
			.then(this.updateIssues);
	}

	updateIssues = (data) => {
		const issues = Object.assign({}, this.state.issues);
		issues[this.state.activeRepo] = data;

		this.setState({
			issues: issues,
		});
	}

	render() {
		if (!this.headers.Authorization) {
			return <Login
				addToken={this.addAuthToken}
				headers={this.headers}
				updateRepos={this.updateRepos}
			/>;
		}
		const activeIssues = this.state.issues[this.state.activeRepo];
		let issues = null;
		if (this.state.activeRepo) {
			issues = <Issues issues={activeIssues || []} loading={!activeIssues}/>;
		}

		return (
			<div className="logged-in">
				<Repos
					repos={this.state.repos}
					selectRepo={this.selectRepo}
					activeRepo={this.state.activeRepo}
				/>
				{issues}
			</div>
		);
	}
}

export default PageComponent;

import React from 'react';
import Login from './login.jsx';

class PageComponent extends React.Component {
	constructor() {
		super();

		this.headers = {
			Accept: 'application/vnd.github.v3+json',
			'Content-Type': 'application/json',
		};

		this.repos = {};
	}

	addAuthToken = (oAuthToken) => {
		this.headers.Authorization = `token ${oAuthToken}`;
	}

	updateRepos = (data) => {
		Object.assign(this.repos, data);
	}

	render() {
		return <div>
			<Login
				addToken={this.addAuthToken}
				headers={this.headers}
				updateRepos={this.updateRepos}
			/>
		</div>;
	}
}

export default PageComponent;

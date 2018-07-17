import React from 'react';
import PropTypes from 'prop-types';

function LoginComponent(props) {

	const login = (e) => {
		const token = e.currentTarget.value;
		props.addToken(token);
	};

	const fetchRepos = () => {
		const req = new Request('https://api.github.com/user/repos', {
			method: 'GET',
			headers: props.headers,
		});

		fetch(req)
			.then(res => res.json())
			.then(props.updateRepos);
	};

	return <div>
		<label>
			<p>enter auth token</p>
			<input type="text" onBlur={login}/>
		</label>
		<button onClick={fetchRepos}>fetch repos</button>
		<div id="console"></div>
	</div>;
}

export default LoginComponent;

LoginComponent.propTypes = {
	addToken: PropTypes.func,
	headers: PropTypes.object,
	updateRepos: PropTypes.func,
};

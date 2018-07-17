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

	return (
		<section className="login">
			<label>
				<p className="label">enter auth token</p>
				<input type="password" onBlur={login}/>
			</label>
			<button onClick={fetchRepos}>Log In</button>
		</section>
	);
}

export default LoginComponent;

LoginComponent.propTypes = {
	addToken: PropTypes.func,
	headers: PropTypes.object,
	updateRepos: PropTypes.func,
};

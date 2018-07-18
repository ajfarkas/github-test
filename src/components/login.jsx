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
			<h1>Issue Tracker</h1>
			<form>
				<label>
					<p className="label">enter auth token</p>
					<input type="password" onBlur={login}/>
				</label>
				<button className="login-btn" onClick={fetchRepos}>Log In</button>
			</form>
		</section>
	);
}

export default LoginComponent;

LoginComponent.propTypes = {
	addToken: PropTypes.func,
	headers: PropTypes.object,
	updateRepos: PropTypes.func,
};

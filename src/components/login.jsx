import React from 'react';
import PropTypes from 'prop-types';

class LoginComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	login = (e) => {
		const token = e.currentTarget.value;
		this.props.addToken(token);
	}

	test = () => {
		const req = new Request('https://api.github.com/user', {
			method: 'GET',
			headers: this.props.headers,
		});

		fetch(req)
			.then(res => res.json())
			.then(data => {
				window.data = data;
				document.getElementById('console').innerText = JSON.stringify(data);
			});
	}

	render() {
		return <div>
			<label>
				<p>enter auth token</p>
				<input type="text" onBlur={this.login}/>
			</label>
			<button onClick={this.test}>Test</button>
			<div id="console"></div>
		</div>;
	}
}

export default LoginComponent;

LoginComponent.propTypes = {
	addToken: PropTypes.func,
	headers: PropTypes.object,
};

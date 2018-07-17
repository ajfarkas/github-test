import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/login.jsx';

// const API = 'https://api.github.com';
const headers = {
	Accept: 'application/vnd.github.v3+json',
	'Content-Type': 'application/json',
};

function addAuthToken(oAuthToken) {
	headers.Authorization = `token ${oAuthToken}`;
}

ReactDOM.render(
	<Login
		addToken={addAuthToken}
		headers={headers}
	/>,
	document.getElementsByTagName('main')[0]
);

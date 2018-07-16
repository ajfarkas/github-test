const API = 'https://api.github.com';
const headers = {
	Accept: 'application/vnd.github.v3+json',
	'Content-Type': 'application/json',
};

function addAuthToken(oAuthToken) {
	headers.Authorization = `token ${oAuthToken}`;
	return true;
};

function login(token) {
	Object.assign(headers, {Authorization: `token ${token}`})

	const req = new Request(`${API}/user`, {
		method: 'GET',
		headers: headers,
	})

	fetch(req)
		.then(res => { return res.json()})
		.then(data => {
			window.data = data;
			console.log(data);
		})
};

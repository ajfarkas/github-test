import React from 'react';
import Issue from './issueitem.jsx';
// import PropTypes from 'prop-types';

class IssueListComponent extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		return <div>
			<Issue/>
		</div>;
	}
}

export default IssueListComponent;


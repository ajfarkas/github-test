import React from 'react';
import Issue from './issueitem.jsx';
import PropTypes from 'prop-types';

function IssueListComponent(props) {
	const issues = props.issues.map(issue => (
		<Issue issue={issue} key={issue.id}/>
	));
	return <div>
		{issues}
	</div>;
}

export default IssueListComponent;

IssueListComponent.propTypes = {
	issues: PropTypes.array.isRequired,
};

import React from 'react';
import Issue from './issueitem.jsx';
import PropTypes from 'prop-types';

function IssueListComponent(props) {
	const issues = props.issues.map(issue => (
		<Issue issue={issue} key={issue.id}/>
	));

	if (props.loading) {
		return (
			<section className="issue-section">
				<div className="loading-icon"></div>
			</section>
		);
	}
	return (
		<section className="issue-section">
			<h2>Issues</h2>
			<ul className="issues">
				{issues}
			</ul>
		</section>
	);
}

export default IssueListComponent;

IssueListComponent.propTypes = {
	issues: PropTypes.array.isRequired,
	loading: PropTypes.bool,
};

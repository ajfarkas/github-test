import React from 'react';
import PropTypes from 'prop-types';

function IssueItem(props) {
	return (
		<li className="issue">
			<a className="issue-link" href={props.issue.html_url}>
				<h3>{props.issue.title}</h3>
				<p>{props.issue.body}</p>
			</a>
		</li>);
}

export default IssueItem;

IssueItem.propTypes = {
	issue: PropTypes.object.isRequired,
};

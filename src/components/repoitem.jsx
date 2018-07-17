import React from 'react';
import PropTypes from 'prop-types';

function RepoItem(props) {
	const buttonClass = `repo-btn${props.isActive ? ' is-active' : ''}`;

	return (
		<li className="repo">
			<button type="button" className={buttonClass} onClick={props.selectRepo.bind(this, props.repo.id)}>
				<h3>{props.repo.name}</h3>
			</button>
		</li>);
}

export default RepoItem;

RepoItem.propTypes = {
	isActive: PropTypes.bool.isRequired,
	repo: PropTypes.object.isRequired,
	selectRepo: PropTypes.func.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';

function RepoItem(props) {
	const buttonClass = `repo${props.isActive ? ' is-active' : ''}`;

	return (
		<li className="repo">
			<button type="button" className={buttonClass} onClick={props.selectRepo.bind(this, props.repo.id)}>
				{props.repo.name}
			</button>
		</li>);
}

export default RepoItem;

RepoItem.propTypes = {
	isActive: PropTypes.bool.isRequired,
	repo: PropTypes.object.isRequired,
	selectRepo: PropTypes.func.isRequired,
};

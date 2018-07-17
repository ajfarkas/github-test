import React from 'react';
import Repo from './repoitem.jsx';
import PropTypes from 'prop-types';

function RepoListComponent(props) {
	const repos = Object.keys(props.repos).map(repoKey => (
		<Repo
			isActive={props.activeRepo === repoKey}
			selectRepo={props.selectRepo}
			repo={props.repos[repoKey]}
			key={repoKey}
		/>
	));

	return <div>
		{repos}
	</div>;
}

export default RepoListComponent;

RepoListComponent.propTypes = {
	repos: PropTypes.object.isRequired,
	selectRepo: PropTypes.func.isRequired,
	activeRepo: PropTypes.string,
};

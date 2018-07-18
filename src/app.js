import React from 'react';
import { render as DomRender } from 'react-dom';
import Page from './components/page.jsx';

const container = document.getElementsByTagName('main')[0];
DomRender(
	<Page/>,
	container
);

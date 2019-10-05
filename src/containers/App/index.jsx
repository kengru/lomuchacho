import React, { useEffect, useState } from 'react';

import Menu from '../../components/Menu';
import Routes from '../../components/Routes';

import { load } from '../../helpers/spreadsheet';
import config from '../../config';

import './App.sass';

const App = () => {
	const [ menuItems, setMenuItems ] = useState([]);
	const [ muchachos, setMuchachos ] = useState([]);

	const onLoad = (data, error) => {
		if (data) {
			const muchachos = data.muchachos;
			const menuItems = muchachos.map((el) => {
				const menuItem = {
					username: el.username,
					name: el.name
				};
				return menuItem;
			});
			setMenuItems(menuItems);
			setMuchachos(muchachos);
		} else {
			console.log(error);
		}
	};

	useEffect(() => {
		const initClient = () => {
			window.gapi.client
				.init({
					apiKey: config.apiKey,
					discoveryDocs: config.discoveryDocs
				})
				.then(() => {
					load(onLoad);
				});
		};
		window.gapi.load('client', initClient);
	}, []);

	return (
		<div className="App">
			<div className="columns is-gapless">
				<div className="column is-one-quarter">
					<Menu muchachos={menuItems} />
				</div>
				<div className="column">
					<Routes muchachos={muchachos} />
				</div>
			</div>
		</div>
	);
};

export default App;

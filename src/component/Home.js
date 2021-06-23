import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import Userpage from './Usepage';

const Home = (props) => {
	const [data, setData] = useState([]);
	const path = props.match.path;

	useEffect( () => {
		fetch('https://jsonplaceholder.typicode.com/photos')
			.then((response) => response.json())
			.then((resp) => {
				const ApiData = resp.map((val) => {
					return val;
				})
				setData(ApiData);
			});
	}, [])

	return (
		<Router>
			<h1 className="titleheading">JSONPLACEHOLDER API </h1>
			<ul className="list">
				{
					data.map((val, index) => {
						const {id} = val;
						if (index < 50) {
							return <li key={id}><Link to={`${path}${id}`} className="userId">{id}</Link></li>
						}
						return null;
					})
				}
			</ul>
			<Route path={`${path}:id`} render={() => <Userpage data={data} />} />
		</Router>
	)
}

export default withRouter(Home);
import React from 'react';
import { withRouter } from 'react-router-dom';

const Userpage = (props) => {
	const apiData = props.data;
	const pagepath = parseInt(props.match.params.id);
	return (
		<div>
			{
				apiData.map((val) => {
					const {id,title,url} = val;
					if (pagepath === id) {
						return (
							<div key={id}>
								<h1 className="apiheading">TITLE: {title}</h1>
								<figure className="api-image">
									<img src={url} alt={id} />
								</figure>
							</div>
						);
					}
					return null;
				})
			}
		</div>
	)
}

export default withRouter(Userpage)
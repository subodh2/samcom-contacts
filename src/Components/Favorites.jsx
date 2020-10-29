import React, {Component}  from 'react'
import { Link } from 'react-router-dom'

import './Favorites.css'

class Favorites extends Component {
	state={users:[]}

	componentDidMount() {
		let data = localStorage.getItem('users');
		let storedUsers;
		if(data) {
			storedUsers = JSON.parse(data);
		} else {
			storedUsers = [];
		}
		this.setState({users: storedUsers});
	}

	displayFavUsers() {
		const userDetails = this.state.users;
		if (userDetails.length == 0) {
			return <div> No favorite users</div>
		} else {
			let list = '';
			list = userDetails.map(each => {
				return 	<Link to={'/details/'+each.id} key={each.id} >
							<div className="each-user">
								<p className="user-name">{each.first_name} {each.last_name}</p>
								<img src={each.avatar} />
							</div>
						</Link>
					})
			return list
		}
	}

	render() {

		return (
			<div>
				Favorite Users
				<div className="fav-users">
					{this.displayFavUsers()}	
				</div>
			</div>
			)
	}
}

export default Favorites
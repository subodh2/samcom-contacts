import React, {Component}  from 'react'
import {connect} from 'react-redux'
import './Details.css'

import {getUserDetails, addToFav} from '../Actions/Users/'

class Details extends Component {
	componentDidMount() {
		const id = this.props.match.params.id;
		this.props.getUserDetails(id);
	}

	addToFav() {
		const data = localStorage.getItem('users');
		let storedUsers;
		if(data !== null) {
			storedUsers = JSON.parse(data);
		} else {
			storedUsers = []
		}
		
		for(let i=0; i< storedUsers.length; i++) {
			if(storedUsers[i].id == this.props.userDetails.id) {
				return
			}
		}
		storedUsers.push(this.props.userDetails);
		localStorage.setItem('users', JSON.stringify(storedUsers))

	}


	renderUserDetail() {
	
		const userDetails = this.props.userDetails;
		if (userDetails == undefined) {
			return ""
		} else {
			return 	<div>
						<img src={userDetails.avatar}/>
						<p>
							First Name: {userDetails.first_name}
						</p>
						<p>
							Last Name: {userDetails.last_name}
						</p>
						<p>
							Email Address: {userDetails.email}
						</p>
						<button onClick={() =>{this.addToFav()}}>Add To Favorites</button>
					</div>
		}
	}

	render() {
		return (
			<div>
				Details of the Users
				<div className="user-details">
					{this.renderUserDetail()}
				</div>
			</div>
			)
	}
}

const mapStateToProps = (state, ownProps) => {
	return {userDetails: state.user.userDetails};

}

export default connect(mapStateToProps, {getUserDetails, addToFav})(Details)
import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

import {getUsers, sortUser} from '../Actions/Users/'

import "./Home.css"

class Home extends Component {

	constructor(props) {
		super(props);
		this.selectInput = React.createRef();
	}

	componentDidMount() {
		this.props.getUsers();
	}

	displayUsers() {
		let list = '';
		list = this.props.users.map(each => {
			return 	<Link to={'/details/'+each.id} key={each.id} >
						<div className="each-user">
							<p className="user-name">{each.first_name} {each.last_name}</p>
							<img src={each.avatar} />
						</div>
					</Link>
		})
		return list
	}

	onSortSelect(e) {
		this.props.sortUser(this.selectInput.current.value);
	}

	render() {
		return (
				<div className="users">
				<span> Sort By:</span>
				<select name="sort" className="sort" ref= {this.selectInput} onChange={() => this.onSortSelect()}>
					<option value=""> </option>
					<option value="az">A-Z</option>
  					<option value="za">Z-A</option>
				</select>
				<br />
					Users
					{this.displayUsers()}
				</div>
			)
	}
}

const mapStateToProps = (state, ownProps) => {
	return {users: state.user.users || []}

}

export default connect(mapStateToProps, {getUsers, sortUser})(Home)
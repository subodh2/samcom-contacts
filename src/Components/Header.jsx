import React, {Component}  from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

class Header extends Component {

	render() {

		return (
			<div>
				<div id="menu">
					<div className="menu-item">
						<Link to={'/'} >Home</Link>
					</div>
					<div className="menu-item">
						<Link to={'/favorites'} >Favorites</Link>
					</div>
				</div>
				{this.props.children}
			</div>
			)
	}
}

export default Header
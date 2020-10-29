import {GET_USER, USER_DETAILS} from '../../Reducers/reducer_types'
import axios from 'axios';


export const getUsers = () => async (dispatch, getState) => {
	let users = await axios.get('https://reqres.in/api/users').then((response) => {
		return response.data.data;

	})
	dispatch({type: GET_USER, payload:users})
}

export const getUserDetails = (id) => async (dispatch, getState) => {
	let userDetails = await axios.get('https://reqres.in/api/users/'+id).then((response) => {
		return response.data.data;

	})
	dispatch({type: USER_DETAILS, payload:userDetails})
}

export const addToFav = (userDetails) => async (dispatch, getState) => {
	console.log("dont forget save fav");
}

export const sortUser = (value) =>(dispatch, getState) => {

	if(value == "") {
		return;
	}
	let users =  getState().user.users;
	let newUsers = users.sort((a,b) => {
		var nameA=a.first_name.toLowerCase();
		var nameB=b.first_name.toLowerCase();
		if("az" == value) {
			if (nameA < nameB) //sort string ascending
				return -1
			if (nameA > nameB)
				return 1	
		}
		if("za" == value) {
			if (nameA > nameB) //sort string descending
				return -1
			if (nameA < nameB)
				return 1
		}
		
	});
	dispatch({type: GET_USER, payload:newUsers})
	
}
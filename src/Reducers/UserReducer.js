import  {USER_DETAILS, GET_USER} from './reducer_types'

const UserReducer = (state = {}, action) => {
	switch(action.type) {
		case GET_USER: 
			const newState = {...state, users: new Array(...action.payload), userDetails:undefined};
			return newState;
		case USER_DETAILS: 
			return ({...state, userDetails: action.payload})
		default: 	
			return ({...state})
	}
}

export default UserReducer
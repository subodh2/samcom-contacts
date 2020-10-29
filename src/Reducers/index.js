import {combineReducers} from 'redux'

import UserReducer from './UserReducer'

const appReducer = combineReducers({
  user: UserReducer,
});


const rootReducer = (state,action) => {
	return appReducer(state,action)
}

export default rootReducer
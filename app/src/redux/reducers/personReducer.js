import { SIGN_IN } from '../types/personType'

export const personReducer = (state = {}, action) => {
	switch (action.type) {
		case SIGN_IN:
			return {
				...state,
				...action.payload
			}
	
		default:
			return state
	}
}

export default personReducer
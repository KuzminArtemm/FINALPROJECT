import { LIKE_POST } from "../types/likesType"


const likesReducer = (state = [], action) => {
    switch (action.type) {
        case LIKE_POST:
        return state.map((post) => {
                if (post._id === action.payload._id) return action.payload
                return post  
            }) 
        default:
        return state
            
    }
}

export default likesReducer
     
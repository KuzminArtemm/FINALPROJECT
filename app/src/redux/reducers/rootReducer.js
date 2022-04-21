

import { combineReducers } from "redux";
import likesReducer from "./likesReducer";
import { personReducer } from "./personReducer";
import postsReducer from "./postsReducer";
import { searchReducer } from "./searchReducer";

const rootReducer = combineReducers({
	posts: postsReducer,
	search: searchReducer,
	person: personReducer,
	likes: likesReducer
})


export default rootReducer


const initState = () => {



	return {
		posts: [],
		search: '',
		likeCount: 0,
		person: {
			name: '',
			email: '',
			token: '',
		},
	}
}

export default initState
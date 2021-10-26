// Action names
const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";

const initialState = {
	login: "",
	password: ""
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_AUTH_USER_DATA:
			return {
				...state,
				...action.data
			}

		default:
			return state
	}
}

// Action creators
export const setAuthUsersData = (login, password) => ({ type: SET_AUTH_USER_DATA, data: { login, password } });

export default authReducer;
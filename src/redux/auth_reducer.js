let initialState = {
    userId: null,
    email: null,
    login: null,
    auth: { loggedIn: false }
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOG_IN":
            return {
                ...state,
                auth: { loggedIn: true }};
            break;

        case "LOG_OUT":
            return {
                ...state,
                auth: { loggedIn: false }};
            break;

        default:
            return state;
            break;
    }
};

export default authReducer;
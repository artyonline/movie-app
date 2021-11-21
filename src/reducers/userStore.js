const userState = {
    user: {},
    isLoggedIn: false,
    error: null
}

const userStore = (state = userState, action) => {
    switch (action.type) {
        case "SIGNIN":
            if (action.success) {
                state.isLoggedIn = true;
                state.user = action.data;
                state.error = null;
            }
            console.log(state);
            return state;
        case "SIGNOUT":
            if (action.success) {
                state.isLoggedIn = false;
                state.user = null;
                state.error = null;
            }
            return state;
        case "ERROR":
            state.isLoggedIn = false;
            state.user = null;
            return state;
        default:
            return state;
    }
}

// const userReducer = async (state = state, action) => {
//     switch (action.type) {
//         case "SIGNIN":
//             const [user, isLoggedIn] = await login(action.payload);
//             if(isLoggedIn) {
//                 state.isLoggedIn = isLoggedIn;
//                 state.user = user;
//             }
//                 return state;
//         case "SIGNOUT":
//             state.isLoggedIn = false;
//             state.user = null;
//             return state;
//         default:
//             return state;
//     }
// };
//

export default userStore;
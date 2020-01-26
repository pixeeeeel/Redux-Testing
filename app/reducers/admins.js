export default (state = [], action) => {
    switch (action.type) {
        case "ADD_ADMIN":
            return [
                ...state,
                action.payload
            ];
        case "REMOVE_ADMIN":
            return state.filter((value, index) => {
                return value != action.payload;
            });
        default:
            return state;
    }
}
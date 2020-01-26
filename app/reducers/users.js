export default (state = [], action) => {
    switch (action.type) {
        case "ADD_USER":
            return [
                ...state,
                action.payload
            ];
        case "REMOVE_USER":
            return state.filter((value, index) => {
                return value != action.payload;
            });
        default:
            return state;
    }
}
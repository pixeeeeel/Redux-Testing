export default (state = "", action) => {
    switch (action.type) {
        case "FILTER_SET":
            return action.payload
        case "FILTER_RESET":
            return "";
        default:
            return "";
    }
}
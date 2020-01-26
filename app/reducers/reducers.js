import { combineReducers } from "redux";
import users from "./users";
import admins from "./admins";
import filterList from "./filterList";

export default combineReducers({
    users,
    admins,
    filterList
});
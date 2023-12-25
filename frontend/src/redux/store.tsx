import { createStore } from "redux";
import cardReducer from "./reducer/cardReducer";

const store = createStore(cardReducer);

export default store;

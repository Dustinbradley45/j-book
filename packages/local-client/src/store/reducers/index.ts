import cellReducer from "./cellsReducer";
import { combineReducers } from 'redux';
import bundleReducer from "./bundlesReducer";

const reducers = combineReducers({
    cells: cellReducer,
    bundles: bundleReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>
import { combineReducers } from 'redux';
import productReducer from './productReducer';

const rootReducer = combineReducers({ product: productReducer });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

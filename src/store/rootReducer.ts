import { combineReducers } from 'redux';
import zooReducer from './zoo/zooReducer';
import productReducer from './products/ProductsReducer';

const rootReducer = combineReducers({ zooReducer, productReducer });
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

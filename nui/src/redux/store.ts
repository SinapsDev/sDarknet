import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "./reducers/index";
import thunk from "redux-thunk";
import { TypedUseSelectorHook, useSelector } from 'react-redux';


const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSIONCOMPOSE__ || compose;

const store = createStore(
    rootReducer ,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);
export default store;

export type StoreType = ReturnType<typeof rootReducer>;
export const useReduxState: TypedUseSelectorHook<StoreType> = useSelector;
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { plantsReducer } from './plants.reducer';
import { userReducer } from './user.reducer';

const rootReducer = combineReducers({
  plants: plantsReducer,
  user: userReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

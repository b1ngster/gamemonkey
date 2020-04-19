import { createStore } from 'redux'

// ------------------------ reducer helpers ------------------------


let reducers = {}

let addReducer = (reducers, actionType, reducer) =>
  reducers[actionType] = (state, action) => {
    if (action.type == actionType) {
      return reducer(state, action)
    }
  }

let reducer = (state, action) => {
  if (reducers[action.type]) {
    return reducers[action.type](state, action)
  }
  return state
}



// apply logging middleware (not necessary)
// open the console to see the action logger output on each time new action dispatched
const actionLogger = ({ dispatch, getState }) => next => action => {
  console.log("action logger: action.type=%s state=%d", action.type, getState())
  return next(action)
}


// ------------------------ reducers ------------------------
// those will be creating new states and returning it,
// depending on the dispatched actions


addReducer(reducers, 'ITEM', (state, action) => --state['ITEM'])
addReducer(reducers, 'INCREMENT', (state, action) => ++state['TIMER'])
addReducer(reducers, 'DECREMENT', (state, action) => --state['TIMER'])
addReducer(reducers, 'INCREMENT_ITEM', (state, action) => ++state['ITEM_TIMER'])
addReducer(reducers, 'DECREMENT_ITEM', (state, action) => --state['ITEM_TIMER'])



const DEFAULT_STATE = {'TIMER' : 0,
                        'ITEM_TIMER' : 0 };


                        const store = createStore(
                            reducer, 
                            DEFAULT_STATE, 
                            applyMiddleware(actionLogger)
                          );




setInterval(() => store.dispatch({type: 'INCREMENT'}), 1000)


// ------------------------ rendering --------------------

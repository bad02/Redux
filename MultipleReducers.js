// header for redux
const redux = require('redux')
const reduxLogger = require('redux-logger')  //define middleware

const createStore = redux.createStore
const combineReducer = redux.combineReducers  //combining reducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger() // middleware


// actions
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAMS = 'BUY_ICECREAMS'

function buyCake() {  // Action creater function which return action
    return {
        type: BUY_CAKE,   // Action has property type describing what happened
        info: 'First redux action'

    }
}

function buyIceCreams() {  // action creator function
    return {
        type: BUY_ICECREAMS,
    }
}



// initail state
const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCreams: 20
}





// Reducer 1 (shopkeeper 1)
// (previousState, action) => newState

const cakeReducer = (state = initialCakeState, action) => {  // ties store and actions
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,   //( ... means make copy of state object and update initial state)
            numOfCakes: state.numOfCakes - 1 // transformation
        }
        default: return state // updated state retured
    }
}

//reducer 2(shopkeeper 2)
const IceCreamsReducer = (state = initialIceCreamState, action) => {  // ties store and actions
    switch (action.type) {
        case BUY_ICECREAMS: return {
            ...state,   //( ... means make copy of state object and update initial state)
            numOfIceCreams: state.numOfIceCreams - 1 // transformation
        }
        default: return state // updated state retured
    }
}








// store
const rootReducers = combineReducer({    // method for combining reducers
    cake: cakeReducer,
    icecream: IceCreamsReducer
})

const store = createStore(rootReducers, applyMiddleware(logger))  //creating store and rootreducer will check how combined state transition will happen(holding combine app state)
console.log('Initial state', store.getState())   //getState for accesseing store and logging it in console
const unsubscribe = store.subscribe(() => {}) // listner via subscriber and aftr updated state, we have logger middleware to handle log statement
store.dispatch(buyCake()) // dispatch accepting action for updation of state (reducer will see the action type)
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCreams())
store.dispatch(buyIceCreams())

unsubscribe()   
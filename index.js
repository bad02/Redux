const redux = require('redux')
const createStore = redux.createStore  // creating store

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



const initalState = {  // Defining initial states
    numOfCakes: 10,
   // numOfIceCreams: 20
}


// Reducer 
// (previousState, action) => newState

const reducer = (state = initalState, action) => {  // ties store and actions
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,   //( ... means make copy of state object and update initial state)
            numOfCakes: state.numOfCakes - 1 // transformation
        }


        case BUY_ICECREAMS: return {
            ...state,   //( ... means make copy of state object and update initial state)
            numOfIceCreams: state.numOfIceCreams - 1 // transformation
        }

        default: return state // updated state retured
    }
}


// store
const store = createStore(reducer)  //creating store and reducer will check how state transition will happen(holdin app state)
console.log('Initial state', store.getState())   //getState for accesseing store and logging it in console
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))  // listner via subscriber and aftr updated state we log it in console
store.dispatch(buyCake()) // dispatch accepting action for updation of state (reducer will see the action type)
store.dispatch(buyCake())
store.dispatch(buyCake())
//store.dispatch(buyIceCreams())
//store.dispatch(buyIceCreams())

unsubscribe()













import { createStore } from 'redux'

const ADD_ACTION = "ADD";
const REDUCE_ACTION = "REDUCE";


//state
const initialState = {
    count: 199
};

//action
const add = (number) => {
    debugger
    return {
        type: ADD_ACTION,
        number
    };
};

const reduce = (number) => {

    return {
        type: REDUCE_ACTION,
        number
    };
};

//reducer

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            return Object.assign({}, state, {
                count: state.count + action.number
            });

        case "REDUCE":
            return Object.assign({}, state, {
                count: state.count - action.number
            });

        default:
            return state;
    }
};

const store = createStore(reducer);



export {add,reduce}
export default store




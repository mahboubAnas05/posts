const initialState = {num : 0} // kat7at lpoint de depart

function reducer(state = initialState, action ) { // y3ni "state = {num : 0}" so state is a object
    switch(action.type){
        case "inc": return {...state, num : state.num + 1}; // if action.type === "inc" return {...state, num : state.num + 1}
        case "dec": return {...state, num : state.num - 1}; // else if action.type === "dec" return {...state, num : state.num - 1}
        case "rest": return {...state, num : 0}; // else if action.type === "rest" return {...state, num : 0} 
        default : return state // else no change
        }
    }

export default reducer 
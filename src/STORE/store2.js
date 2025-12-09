const valStoreInitial = {
    num1 : 0,
    num2 : 0,
    result : 0
}

function reducer(store = valStoreInitial, action){
    switch(action.type){
        case "incre" : return{...store, result : store.num1 + store.num2}; // asa7bi  zid le champ "({name : value})"
        case "decre" : return{...store, result : store.num1 - store.num2};
        case "prod" : return {...store, result : store.num1 * store.num2};
        case "divi" : return {...store, result : store.num1 / store.num2};
        case "rest" : return{...store, result : 0};
        default : return store
    }
}

export default reducer

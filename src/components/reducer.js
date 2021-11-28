// Create the initialState.
export const initialState = {
    cart: [],
};

// Create a reducer now:
// What is a Reducer: a reducer is something that we use to store or dispatch data into the data layer.

const reducer = (state, action) =>{

    console.log(action);

    switch(action.type)
    {
        case "ADD_TO_CART": 
            return {
                ...state,
                cart: [...state.cart, action.item]
            };
        
        default:
            return state;
    }
};

export default reducer;

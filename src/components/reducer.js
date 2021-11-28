// Create the initialState.
export const initialState = {
    cart: [],
};

// Lets create a Selector for calculating the cart total
export const getCartTotal = (cart) =>
    cart?.reduce((amount,item) => item.price_int + amount, 0);


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

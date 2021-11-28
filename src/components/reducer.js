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

    // console.log(action);

    switch(action.type)
    {
        // Code to Add Item to the Cart
        case "ADD_TO_CART": 
            return {
                ...state,
                cart: [...state.cart, action.item]
            };

        
        // Code to Remove a Item with Particular Id from the Cart.
        case "REMOVE_ITEM_FROM_CART":

            const index = state.cart.findIndex((cartItem) => cartItem.id == action.id);
            let newCart = [...state.cart];
            if(index >= 0)
            {
                newCart.splice(index, 1);
            }
            else
            {
                console.warn(`Can not remove item with id: ${action.id} from the Cart.`);
            }
            return{
                ...state,
                cart: newCart
            }

        default:
            return state;
    }
};

export default reducer;

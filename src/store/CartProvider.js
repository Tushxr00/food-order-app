import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "Add") {
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    const exisitngCartItemIndex = state.items.findIndex(item => item.id === action.item.id)
    const exisitingCartItem = state.items[exisitngCartItemIndex]
    let updatedItems;
    if(exisitingCartItem){
      const updatedItem={
        ...exisitingCartItem,
        amount: exisitingCartItem.amount + action.item.amount
      }
      updatedItems=[...state.items]
      updatedItem[exisitingCartItem]=updatedItem
    }else{
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === "Remove") {
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "Add", item });
  };

  const removeItemToCartHandler = (id) => {
    dispatchCartAction({ type: "Remove", id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

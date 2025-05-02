# useReducer

`useReducer` is a React hook that lets you manage state with a reducer function. It's an alternative to `useState` that gives more control, and it's more suitable for managing complex state logic.

## Purpose and Explanation

The main purpose of `useReducer` is to manage complex state logic, especially when the next state depends on the previous state or when you have multiple sub-values that need to be updated together. It provides a predictable way to manage state transitions by centralizing the state logic in a reducer function.

`useReducer` is inspired by the Redux pattern, which is a popular state management library for JavaScript applications. It allows you to manage state in a more structured and organized way, making it easier to reason about and debug your code.

## How to Use It

The `useReducer` hook takes two arguments:

1.  **reducer:** A function that takes the current state and an action as arguments and returns the new state.
2.  **initialState:** The initial state of the component.

**Return Value:**

`useReducer` returns an array containing:

1.  **state:** The current state of the component.
2.  **dispatch:** A function that lets you dispatch actions to the reducer.

**Example:**

```javascript
import React, { useReducer } from 'react';

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
}

function MyComponent() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}
```

**Explanation of the Example:**

In this example, `useReducer` is used to manage the `count` state. The `reducer` function updates the state based on the dispatched actions. The `dispatch` function is used to dispatch actions to the reducer, which then updates the state.

### Using Constant Values for Actions

When working with reducers, it's a best practice to define your action types as constants rather than using string literals directly. This approach has several benefits:

1. **Prevents typos**: If you misspell a string literal, JavaScript won't throw an error, but your action won't work as expected. With constants, a misspelling will cause a reference error.
2. **Centralized definition**: All action types are defined in one place, making it easier to see all possible actions.
3. **Autocompletion**: Your IDE can provide autocompletion for constants, making development faster.
4. **Easier refactoring**: If you need to change an action type name, you only need to change it in one place.

### Using Action Payloads

In the basic example above, we only used action types to determine what state change to make. However, in more complex scenarios, you'll often need to pass additional data with your actions. This is where the **payload** concept comes in.

A payload is simply data that you include in your action object to provide the reducer with the information it needs to update the state correctly. For example, instead of just incrementing by 1, you might want to increment by a specific amount.

### Example with Payloads and Action Constants

Here's a more complex example that demonstrates both concepts using a shopping cart:

```javascript
import React, { useReducer } from 'react';

// Action type constants
const CART_ACTIONS = {
  ADD_ITEM: 'add-item',
  REMOVE_ITEM: 'remove-item',
  UPDATE_QUANTITY: 'update-quantity',
  APPLY_DISCOUNT: 'apply-discount',
  CLEAR_CART: 'clear-cart'
};

// Initial state
const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
  discount: 0
};

// Reducer function
function cartReducer(state, action) {
  switch (action.type) {
    case CART_ACTIONS.ADD_ITEM: {
      const { product } = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === product.id);
      
      if (existingItemIndex >= 0) {
        // Product already exists in cart, increase quantity
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1
        };
        
        return {
          ...state,
          items: updatedItems,
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + product.price
        };
      } else {
        // Add new product to cart
        return {
          ...state,
          items: [...state.items, { ...product, quantity: 1 }],
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + product.price
        };
      }
    }
    
    case CART_ACTIONS.REMOVE_ITEM: {
      const { productId } = action.payload;
      const itemToRemove = state.items.find(item => item.id === productId);
      
      if (!itemToRemove) return state;
      
      return {
        ...state,
        items: state.items.filter(item => item.id !== productId),
        totalItems: state.totalItems - itemToRemove.quantity,
        totalPrice: state.totalPrice - (itemToRemove.price * itemToRemove.quantity)
      };
    }
    
    case CART_ACTIONS.UPDATE_QUANTITY: {
      const { productId, quantity } = action.payload;
      if (quantity <= 0) {
        // If quantity is 0 or negative, remove the item
        return cartReducer(state, {
          type: CART_ACTIONS.REMOVE_ITEM,
          payload: { productId }
        });
      }
      
      const itemIndex = state.items.findIndex(item => item.id === productId);
      if (itemIndex === -1) return state;
      
      const item = state.items[itemIndex];
      const quantityDifference = quantity - item.quantity;
      
      const updatedItems = [...state.items];
      updatedItems[itemIndex] = { ...item, quantity };
      
      return {
        ...state,
        items: updatedItems,
        totalItems: state.totalItems + quantityDifference,
        totalPrice: state.totalPrice + (item.price * quantityDifference)
      };
    }
    
    case CART_ACTIONS.APPLY_DISCOUNT: {
      const { discountPercent } = action.payload;
      const discount = (state.totalPrice * discountPercent) / 100;
      
      return {
        ...state,
        discount
      };
    }
    
    case CART_ACTIONS.CLEAR_CART:
      return initialState;
    
    default:
      return state;
  }
}

function ShoppingCart() {
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  
  // Sample products
  const products = [
    { id: 1, name: 'Headphones', price: 99.99 },
    { id: 2, name: 'Keyboard', price: 49.99 },
    { id: 3, name: 'Mouse', price: 29.99 }
  ];

  return (
    <div>
      <h1>Shopping Cart</h1>
      
      <div className="products">
        <h2>Products</h2>
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => dispatch({
              type: CART_ACTIONS.ADD_ITEM,
              payload: { product }
            })}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      
      <div className="cart">
        <h2>Your Cart</h2>
        {cart.items.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <ul>
              {cart.items.map(item => (
                <li key={item.id}>
                  <span>{item.name} - ${item.price.toFixed(2)} x {item.quantity}</span>
                  <div>
                    <button onClick={() => dispatch({
                      type: CART_ACTIONS.UPDATE_QUANTITY,
                      payload: { productId: item.id, quantity: item.quantity - 1 }
                    })}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch({
                      type: CART_ACTIONS.UPDATE_QUANTITY,
                      payload: { productId: item.id, quantity: item.quantity + 1 }
                    })}>
                      +
                    </button>
                    <button onClick={() => dispatch({
                      type: CART_ACTIONS.REMOVE_ITEM,
                      payload: { productId: item.id }
                    })}>
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            
            <div className="cart-summary">
              <p>Total Items: {cart.totalItems}</p>
              <p>Subtotal: ${cart.totalPrice.toFixed(2)}</p>
              {cart.discount > 0 && (
                <p>Discount: -${cart.discount.toFixed(2)}</p>
              )}
              <p>Total: ${(cart.totalPrice - cart.discount).toFixed(2)}</p>
              
              <button onClick={() => dispatch({
                type: CART_ACTIONS.APPLY_DISCOUNT,
                payload: { discountPercent: 10 }
              })}>
                Apply 10% Discount
              </button>
              
              <button onClick={() => dispatch({
                type: CART_ACTIONS.CLEAR_CART
              })}>
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
```

In this example:

1. We define action type constants in a `CART_ACTIONS` object at the top of our component.
2. Our reducer function handles five different action types: adding items, removing items, updating quantities, applying discounts, and clearing the cart.
3. Each action includes a payload with the necessary data:
   - `ADD_ITEM` includes the product object to add
   - `REMOVE_ITEM` includes the productId to remove
   - `UPDATE_QUANTITY` includes both the productId and the new quantity
   - `APPLY_DISCOUNT` includes the discount percentage to apply
4. Note that the reducer function is big and handles a lot of different things. This is a good hint that you can divide it up into smaller functions, like a separate one for each action case. This can make the code more readable, testable, and maintainable.
5. Also note that while this example includes various data to illustrate how useReducer works, values like `totalItems` and `totalPrice` should typically be calculated as needed. This maintains a `Single Source of Truth`, avoiding the possibility of data falling out of sync, and in most cases the performance impact is negligible.


## When to Use useReducer

*   **Complex State Logic:** Use `useReducer` when you have complex state logic that involves multiple sub-values or when the next state depends on the previous state.
*   **Predictable State Updates:** Use `useReducer` to make state updates more predictable by centralizing the state logic in a reducer function.
*   **Redux-like State Management:** Use `useReducer` when you want to manage state in a Redux-like way, with a single source of truth and predictable state transitions.
*   **Sharing State Logic:** `useReducer` can be helpful when sharing state logic between multiple components.
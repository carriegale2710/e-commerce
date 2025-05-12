//SECTION - User Flow Notes -Braindumps

//NOTE - state of cart must be shared across whole website - useContext -> CartContext

/\*1. addItemToCart Function:

USER FLOW

--ProductCard---
ACTION: User clicks 'add to cart' button
-> calls addItemToCart (js.services)
--js.services--
--checking stock capacity--
-> will check if qty of this item in current cart state vs stock available for this product
-> if item quantity in cart is NOT less than stock qty of the item (stock prop): - do not add item id to the cart - display message to user 'not enough stock-check back later'
-> product.id added to 'cart' array
-> 'cart' state is updated with 'setCart'
-> display confirmation message to user '[Item] added to cart!'
--App.jsx--
-> updated cart state is sent to CartList
--CartList.jsx--
-> CartList triggered to re-render
-> each CartItemCard in CartList is re-rendered according to the cart array state
--CartPage.jsx--
-> CartList re-renders inside the CartPage
\*/

/\* 2. RemoveFromCart function:

USERFLOW

--CartItemCard---
ACTION: User clicks 'Remove from cart' button
-> calls removeFromCart (js.services)
--js.services--
-> product.id is popped off the array in 'card' state
-> cart state is updated
-> display confirmation message to user '[Item] removed from cart!'
--App.jsx--
-> updated cart state is sent to CartList
--CartList.jsx--
-> CartList triggered to re-render
-> each CartItemCard in CartList is re-rendered according to the cart array state
--CartPage.jsx--
-> CartList re-renders inside the CartPage

NOTE - managing the quantity of each product

- addItemToCart:
  check item already exists in array, -> use find() with specific product id
  if yes just increment the qty prop by 1 -> spread and update the qty prop
- removeFromCart: decrement the qty -1, if it turns to 0, them remove the ItemCard altogether (or should only show if qty >= 1)
- isThereEnoughStock
  - needs to check if the qty =< stock for the selectedVariant

\*/

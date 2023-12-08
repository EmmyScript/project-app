import { createContext, useState } from "react";



export interface cartObj {
id:number
price:number
productImage:string
productName:string
qtty:number
}
export const ShopContext = createContext<any>(!null);

export const ShopContextProvider = (props: any) => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item of cartItems) {
      totalAmount += item?.price;
    }
    return totalAmount;
  };

  //check if item in cart has same id as incoming cart item
  const isItemInCart = (itemId: number) => {

    return cartItems.some((val:cartObj)=>val.id === itemId);
  };

  const addToCart = (item: cartObj) => {
    console.log(item);

    if (isItemInCart(item.id)) {

     const result =  cartItems.map((val:cartObj)=>{
    
        if(val.id === item.id){
          return{
            ...val,
            qtty:val.qtty+1
          }
        }else{
          return val
        }
      })

     return setCartItems(result)
    } else {
    return  setCartItems([...cartItems,{...item,qtty:item.qtty = 1}]);
    }
  };
  

  const removeFromCart = (item: any) => {

    const result =  cartItems.map((val:cartObj)=>{
    
      if(val.id === item.id && val.qtty >1 ){
        return{
          ...val,
          qtty:val.qtty-1
        }
      }else{
        return val
      }
    })
    // const remainingItem = cartItems.filter((val: any) => val.id != item.id);
   return setCartItems(result);
  };

  const updateCartItemCount = (newAmount: any, itemId: any) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };
  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    setCartItems,
    
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};


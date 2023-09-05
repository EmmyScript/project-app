
 
 export const Product = (props: any) =>  {
     const { productName, price, productImage} = props.data;
    
   return (
     <div className='product '>
        <img src={productImage} />  
        
        <div className='description'>
          
            <p>
                <b>{productName}</b>
            </p>
            <p>${price}</p>
            <button className="addToCartBttn">Add to Cart</button>
        </div>
        
     </div>
   )
 }
 
 export default Product
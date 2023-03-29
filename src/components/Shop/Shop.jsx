import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import {addToDb, getShoppingCart} from '../../utilities/fakedb'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    console.log(cart);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    
    useEffect(()=>{
        const getStored = getShoppingCart()
        const savedCart = []
        // step 1: get id of addedProduct
      for(const id in getStored){
        // step 2: get product from products state using id
        const addedProduct = products.find(product => product.id === id)
        console.log(addedProduct);
        if(addedProduct){
            // step 3: add quantity
            const quantity = getStored[id]
            addedProduct.quantity = quantity
            // step 4: add the addedProduct to the savedCart
            savedCart.push(addedProduct)
        }
      
      }
    //   step 5: set The cart
    setCart(savedCart)
    },[products])

    const handleAddToCart = (product) => {
        // cart.push(product); 
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
        
    }
    

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="">
              <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
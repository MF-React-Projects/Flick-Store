// use local storage to manage cart data
const addToDb = product =>{
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('flick-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }

    // add product to cart
    shoppingCart[product.id] = product;
    localStorage.setItem('flick-cart', JSON.stringify(shoppingCart));
}

const getStoredCart = () => {
    let shoppingCart = {};
    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('flick-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const removeFromDb = id => {
    const storedCart = localStorage.getItem('flick-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('flick-cart', JSON.stringify(shoppingCart));
        }
    }
}

const deleteShoppingCart = () =>{
    localStorage.removeItem('flick-cart');
}

export {
    addToDb,
    getStoredCart,
    removeFromDb,
    deleteShoppingCart
}
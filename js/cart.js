const addProduct=()=>{
    const productField=document.getElementById('product-name');
    const quantityField=document.getElementById('product-quantity');
    const product=productField.value;
    const quantity=quantityField.value;
    productField.value='';
    quantityField.value='';
    // console.log(product,quantity);
    displayProduct(product,quantity);
    saveProductInLocalStorage(product,quantity);
}
const displayProduct=(product,quantity)=>{
    const ul=document.getElementById('product-container');
    const li=document.createElement('li');
    li.innerText=`${product}:${quantity}`
    ul.appendChild(li);
}
const getStoredProductInLocalStorage=()=>{
    let cart={};
    const storedCart=localStorage.getItem('cart');
    if(storedCart){
        cart=JSON.parse(storedCart);
    }
    return cart;
}
const saveProductInLocalStorage=(product,quantity)=>{
    const cart=getStoredProductInLocalStorage();
    cart[product]=quantity;
    // console.log(cart)
    const cartStringified=JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified);
}
const displayProductFromLocalStorage=()=>{
    const saveCart=getStoredProductInLocalStorage();
    for(const product in saveCart){
        const quantity=saveCart[product];
        console.log(product,quantity);
        displayProduct(product,quantity);
    }

}
displayProductFromLocalStorage();
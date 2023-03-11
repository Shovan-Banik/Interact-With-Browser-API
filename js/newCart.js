const addProduct=()=>{
    const inputProduct=document.getElementById('product-field');
    const inputQuantity=document.getElementById('quantity-field');
    const product=inputProduct.value;
    const quantity=inputQuantity.value;
    inputProduct.value='';
    inputQuantity.value='';
    displayProduct(product,quantity);
    setDataInLocalStorage(product,quantity);
}
const displayProduct=(product,quantity)=>{
    const container=document.getElementById('product-container');
    const li=document.createElement('li');
    li.innerText=`${product}:${quantity}`;
    container.appendChild(li);
}
const getDataFromLocalStorage=()=>{
    let cart={};
    const storedCart=localStorage.getItem('cart');
    if(storedCart){
        cart=JSON.parse(storedCart);
    }
    return cart;
    // console.log(cart);
}
const setDataInLocalStorage=(product,quantity)=>{
    const cart=getDataFromLocalStorage();
    cart[product]=quantity;
    const stringifiedCart=JSON.stringify(cart);
    localStorage.setItem('cart',stringifiedCart);
}
const displayFromLocalStorage=()=>{
const localStorageCart=getDataFromLocalStorage();
for(const product in localStorageCart){
    const quantity=localStorageCart[product];
    displayProduct(product,quantity);
}
}
displayFromLocalStorage();

window.addEventListener('load', function() {
    
    let id = document.querySelector('#productId').value;
    let name = document.querySelector('#productName').value;
    let price = this.document.querySelector('#productPrice').value;
    let image = document.querySelector('#productImage').value;
    let product = {id, name, price, image}
    

    document.querySelector('#addProduct-button').addEventListener('click', function(e) {
        e.preventDefault();
        localStorage.setItem(id, JSON.stringify(product));
        window.location.replace("http://localhost:3001/shoppingCart/cart");
    });
});
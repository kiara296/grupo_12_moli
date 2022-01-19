
window.addEventListener('load', function() {
    let shoppingCart = Object.values(this.localStorage).map(product => JSON.parse(product));
    let productsContainer = document.querySelector('#sector1');


    shoppingCart.forEach(product => {
        let article = document.createElement('article');

        article.innerHTML = `
            <input type="hidden" id="productId" value="${product.id}">
            <div class="father">
                <div>
                    <img class="productoImage" src="../images/${product.image}" />
                </div>
                <div>
                    <p class="descrip">${product.name}</p>
                </div>
                <div>
                    <button type="submit" value="add" class="button-general">
                        +
                    </button>
                    <div class="quantity">
                        <span class="span-quantity">1</span>
                    </div>
                    <button type="submit" value="remove" class="button-general">
                        -
                    </button>
                </div>
                <div>
                    <p class="price">$ ${product.price}</p>
                </div>
                <div class="deleteCart">
                    <button type="submit" value="${product.id}" class="button-general delete-button">
                        <i class="far fa-trash-alt"></i>
                    </button>
                </div>
            </div>`;

            productsContainer.appendChild(article);
    });

    document.querySelector('#continue').addEventListener('click', function(e) {
        e.preventDefault();
        window.location.replace("http://localhost:3000/products/catalog");
    });

    document.querySelector('#reset').addEventListener('click', function(e) {
        e.preventDefault();
        window.localStorage.clear();
        window.location.replace("http://localhost:3000/products/carrito");
    });

    let deleteButtons = document.querySelectorAll('.delete-button');
    deleteButtons.forEach(btn => btn.addEventListener('click', function(e) {
        e.preventDefault();
        window.localStorage.removeItem(e.target.value);
        window.location.replace("http://localhost:3000/products/carrito");
    }));

    // TODO: Aqui hay que utilizar fetch o axios para hacer la llamada por post al endpoint de la api
    // correspondiente, el cual realizara propiamente la transaccion
    document.querySelector('#reset').addEventListener('click', function(e) {
        e.preventDefault();
    });
    
});




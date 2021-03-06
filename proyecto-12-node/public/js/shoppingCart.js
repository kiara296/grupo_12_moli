
window.addEventListener('load', function() {
    let shoppingCart = Object.values(this.localStorage).map(product => JSON.parse(product));
    let productsContainer = document.querySelector('#sector1');


    shoppingCart.forEach(product => {
        let article = document.createElement('article');

        article.innerHTML = `
            <input type="hidden" value="${product.id}">
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
                        <i value="${product.id}" class="far fa-trash-alt"></i>
                    </button>
                </div>
            </div>`;

            productsContainer.appendChild(article);
    });

    document.querySelector('#continue').addEventListener('click', function(e) {
        e.preventDefault();
        window.location.replace("http://localhost:3001/catalog");
    });

    document.querySelector('#reset').addEventListener('click', function(e) {
        e.preventDefault();
        window.localStorage.clear();
        window.location.replace("http://localhost:3001/shoppingCart/cart");
    });

    let deleteButtons = document.querySelectorAll('.delete-button');
    deleteButtons.forEach(btn => btn.addEventListener('click', function(c) {
        e.preventDefault();
        if(es.target.value === undefined) {
            window.localStorage.removeItem(e.currentTarget.value);
        } else {
            window.localStorage.removeItem(e.target.value);
        }

        window.location.replace("http://localhost:3001/shoppingCart/cart");
    }));

    // TODO: Aqui hay que utilizar fetch o axios para hacer la llamada por post al endpoint de la api
    // correspondiente, el cual realizara propiamente la transaccion
    document.querySelector('#addTransaction').addEventListener('click', function(e) {
        e.preventDefault();
        if(confirm("Confirmar el pago")) {
            window.localStorage.clear();
            window.location.replace("http://localhost:3001");
        }
    });
    
});




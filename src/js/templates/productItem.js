function productItem ({key, name, price, desc, urlPath, type}){
    const template =`
    <div class="product-card">
        <div class="product-img">
            <div class="buttons">
                <a href="#" id="delete" data-key="${key}">
                    <img src="static/svg/x.svg" alt="delete icon">
                </a>
                <a href="#" id="edit" data-key="${key}">
                    <img src="static/svg/pencil-fill.svg" alt="edit icon">
                </a>
            </div>
            <img src="${urlPath}" alt="${name} image">
        </div>
        <div class="product-details">
            <p class="name">${name}</p>
            <p class="type">${type}</p>
            <p class="price">$${price/100}}</p>
            <p class="desc">${desc}</p>
        </div>
    </div>
    `
    const element = document.createRange().createContextualFragment(template).children[0]
    addProductControls(element)
    return element

}

function addProductControls(product){
    product.querySelector('#delete').addEventListener('click',onDeleteProduct)
    product.querySelector('#edit').addEventListener('click',onEditProduct)
}

function onDeleteProduct(e){
    const key = e.target.dataset.key
    sessionStorage.setItem('key', key)
    window.location.assign('delete.html')
}

function onEditProduct(e){
    const key = e.target.dataset.key
    sessionStorage.setItem('key', key)
    window.location.assign('edit.html')
}

export {productItem}
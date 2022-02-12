function productItem ({key, name, price, desc, urlPath, type}){
    const template =`
    <div class="product-card">
        <div class="product-img">
            <div class="buttons">
                <a href="#" id="delete" data-key="${key}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </a>
                <a href="#" id="edit" data-key="${key}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                    </svg>
                </a>
            </div>
            <img src="${urlPath}" alt="image name">
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
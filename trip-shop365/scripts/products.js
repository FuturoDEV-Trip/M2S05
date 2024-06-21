import { addProductCart } from './cart.js'

const productListElement = document.querySelector('.products');

async function getProducts() {
    try {
        const resposta = await fetch('https://dummyjson.com/products?limit=10')
        const dados = await resposta.json()
    
        return dados.products
    } catch (error) {
        console.log(error)
        return []
    }
}

// buscar produtos
// criar elemento dos produtos
// incluir na listagem de produtos
// <div class="product-card">
//     <!-- <img src="" alt=""> -->
//     <strong>MacBook Pro 13” Big Discount</strong>
//     <span>R$ 25.000</span>    
//     <button>Adicionar</button>
//   </div>
/**
 * Essa função é resposavel apenas para criar o elemento do produto    
 */
function criarElementoProdutoHTML(product) {
    const productElementCard = document.createElement('div')
    productElementCard.classList.add('product-card')

    const imagemProdutoElementCard = document.createElement('img')
    imagemProdutoElementCard.src = product.thumbnail
    imagemProdutoElementCard.alt = product.title
    
    const titleProductElement = document.createElement('strong')
    titleProductElement.innerHTML = product.title

    const priceProductElement = document.createElement('span')
    /** Formatar valor para REAL */
    const priceFormatted = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(product.price) 
    
    priceProductElement.innerHTML = priceFormatted
    /** BOTÃO DE ADICIONAR PRODUTO AO CARRINHO */
    const buttonProductAddElement = document.createElement('button')
    buttonProductAddElement.innerHTML = 'Adicionar'
    /** Evento de clique para adicionar ao carrinho, deve passar o produto */
    buttonProductAddElement.addEventListener('click', () => addProductCart(product))

    productElementCard.appendChild(imagemProdutoElementCard)
    productElementCard.appendChild(titleProductElement)
    productElementCard.appendChild(priceProductElement)
    productElementCard.appendChild(buttonProductAddElement)

    return productElementCard
}


async function renderProducts() {
    const products = await getProducts()
    
    productListElement.innerHTML = ""
    
    products.forEach(product => {
        /**
         * title, price, id
         */
        const produtoElemento = criarElementoProdutoHTML(product)
        productListElement.appendChild(produtoElemento)
        // console.log(produtoElemento)
        // console.log(product.title)
    })
    
}
renderProducts()
// getProducts()

// []
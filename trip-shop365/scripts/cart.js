const cartListElement = document.querySelector('.products-cart')

//<div class="product-cart-item">
  //<strong>MacBook Pro 13” Big Discount</strong>
 // <span>R$ 25.000</span>
//</div>

function createElementItemCart(product) {
  const productElementCartItem = document.createElement('div')  
  productElementCartItem.classList.add('product-cart-item')

  const titleProductElementCartItem = document.createElement('strong')
  titleProductElementCartItem.innerHTML = product.title

  const priceProductElementCartItem = document.createElement('span')
  const priceFormatted = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
  }).format(product.price) 
  
  // priceProductElementCartItem.innerHTML = "1x" + priceFormatted
  priceProductElementCartItem.innerHTML = priceFormatted
  
  productElementCartItem.appendChild(titleProductElementCartItem)
  productElementCartItem.appendChild(priceProductElementCartItem)
  
  return productElementCartItem
}

function renderListCart() {
  const cartListStorage = localStorage.getItem('carrinho')
  
  cartListElement.innerHTML = ""
  
  if (cartListStorage) {
    const cartList = JSON.parse(cartListStorage)

    cartList.forEach(product => {
      const cartitem = createElementItemCart(product)
      cartListElement.appendChild(cartitem)
    })
  }
}

export function addProductCart(product) {
  // console.log('adicionou', product.title)
  const cartListStorage = localStorage.getItem('carrinho') // retornar string or null

  if(cartListStorage) {
    const cartList = JSON.parse(cartListStorage) // convertir os dados para objeto javascript
    cartList.push(product) 

    localStorage.setItem('carrinho', JSON.stringify(cartList))
  
  } else {
    const newList = [product]
    localStorage.setItem('carrinho', JSON.stringify(newList))
  }
  renderListCart()
}

renderListCart()
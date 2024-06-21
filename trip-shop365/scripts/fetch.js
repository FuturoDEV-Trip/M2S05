
async function getProductById() {
    const resposta = await fetch('https://dummyjson.com/products/1')
    const dados = await resposta.json()

    console.log(dados)
}

async function addProduct() {
  const resposta = await fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    body: JSON.stringify({
      title: 'MEU PRODUTO ',
      price: 25,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const data = await resposta.json()

  console.log(data)
}

async function updateProduct(idProduct) {
  const resposta = await fetch('https://dummyjson.com/products/' + idProduct, {
    method: 'PUT', // PATCH
    body: JSON.stringify({
      title: 'MEU PRODUTO 2024',
      price: 0.50,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const data = await resposta.json()

  console.log(data)
}

async function removeProduct(idProduct) {
  const resposta = await fetch('https://dummyjson.com/products/' + idProduct, {
    method: 'DELETE',
  })

  const data = await resposta.json()

  console.log(data)
}

// removeProduct(1)
// updateProduct(1)
// addProduct()
// getProductById()
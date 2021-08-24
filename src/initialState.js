import res from './response.json'

const listProducts = res.products.map((obj) => {
  const responseObj = {
    'id': obj.id,
    'image': `https://${obj.imageUrl}`,
    'price': obj.price.current.value,
    'title': obj.name
  }
  return responseObj
  });

export default {
  cart: [],
  buyer: [],
  orders: [],
  products: listProducts
}
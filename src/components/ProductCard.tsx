import { Product } from '../utils/interfaces';
interface SingleProduct {
  product: Product;
}
const ProductCard = ({ product }: SingleProduct) => {
  return (
    <div className="my-4">
      <h1>Name: {product.name}</h1>
      <p>Price: {product.price}</p>
      <p>Quantity: {product.quantity}</p>
      <p>Type: {product.type}</p>
      <p>Failure rate: {product.failure_rate}</p>
      <p>Parent: {product.parent}</p>
      <p>Description: {product.description}</p>
    </div>
  );
};
export default ProductCard;

import ProductCard from './ProductCard';
import { Product } from '../utils/interfaces';
interface ProductsProps {
  products: Array<Product>;
}
const ProductsList = ({ products }: ProductsProps) => {
  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.name} product={product} />
      ))}
    </div>
  );
};
export default ProductsList;

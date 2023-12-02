import ProductCard from './ProductCard';
import ProductTable from './ProductTable';
import { Product } from '../utils/interfaces';
import { useBreakpoint } from './Hooks/useBreakpoint';

interface ProductsProps {
  products: Array<Product>;
}
const ProductsList = ({ products }: ProductsProps) => {
  const { isMobile } = useBreakpoint();
  return (
    <div className="px-4 py-6">
      {isMobile ? (
        products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))
      ) : (
        <ProductTable products={products} />
      )}
    </div>
  );
};
export default ProductsList;

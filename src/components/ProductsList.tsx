import ProductCard from './ProductCard';
import ProductTable from './ProductTable';
import { Product } from '../utils/interfaces';
import { useBreakpoint } from './Hooks/useBreakpoint';
import { useState, useEffect } from 'react';

interface ProductsProps {
  products: Array<Product>;
  currPage: number;
  elementsPerPage: Number;
}
const ProductsList = ({
  products,
  currPage,
  elementsPerPage,
}: ProductsProps) => {
  const { isMobile } = useBreakpoint();

  const [lastIndex, setLastIndex] = useState<number>(
    Number(elementsPerPage) * Number(currPage)
  );
  const firstIndex = Number(lastIndex) - Number(elementsPerPage);
  const productsOnCurrPage = products?.slice(firstIndex, lastIndex);
  useEffect(() => {
    setLastIndex(Number(elementsPerPage) * Number(currPage));
  }, [currPage, elementsPerPage]);

  return (
    <div className="px-4 py-6 desktop:px-10">
      {isMobile ? (
        productsOnCurrPage.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))
      ) : (
        <ProductTable products={productsOnCurrPage} />
      )}
    </div>
  );
};
export default ProductsList;

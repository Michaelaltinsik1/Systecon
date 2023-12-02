import { Product } from '../utils/interfaces';
import Heading from './Base/Heading';
import Paragraph from './Base/Paragraph';
interface SingleProduct {
  product: Product;
}
const ProductCard = ({ product }: SingleProduct) => {
  return (
    <div className="my-4">
      <Heading type="H3" content={`Name: ${product.name}`} />
      <Paragraph type="body" content={`Quantity: ${product.quantity}`} />
      <Paragraph type="body" content={`Type: ${product.type}`} />
      <Paragraph type="body" content={`Price: ${product.price}`} />
      <Paragraph
        type="body"
        content={`Failure rate: ${product.failure_rate}`}
      />
      <Paragraph type="body" content={`Parent: ${product.parent}`} />
      <Paragraph type="body" content={`Description: ${product.description}`} />
    </div>
  );
};
export default ProductCard;

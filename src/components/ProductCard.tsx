import { Product } from '../utils/interfaces';
import Heading from './Base/Heading';
import Paragraph from './Base/Paragraph';
interface SingleProduct {
  product: Product;
}
const ProductCard = ({ product }: SingleProduct) => {
  return (
    <div className="my-5 first-of-type:mt-0 bg-gray-200 px-4 py-6 [&>h3]:font-bold [&>p]:font-normal shadow-lightShadow rounded-lg ">
      <Heading type="H3" content={`${product.name ? product.name : 'N/A'}`} />
      <Paragraph
        className="font-normal"
        type="bodySmall"
        content={`${product.type ? product.type : 'N/A'}`}
      />
      <div className="flex items-center mt-2">
        <Paragraph type="bodyLarge" content={'Quantity:'} />
        <Paragraph
          className="text-h5 ml-2"
          type="bodyLarge"
          content={`${product.quantity ? product.quantity : 'N/A'}`}
        />
      </div>
      <div className="mt-2">
        <Paragraph type="body" content={'Price'} />
        <Paragraph
          type="bodyLarge"
          content={`${product.price ? product.price : 'N/A'}`}
        />
      </div>
      <div className="mt-2">
        <Paragraph type="body" content={'Failure rate (1/year)'} />
        <Paragraph
          type="bodyLarge"
          content={`${product.failure_rate ? product.failure_rate : 'N/A'}`}
        />
      </div>
      <div className="mt-2">
        <Paragraph type="body" content={'Parent'} />
        <Paragraph
          type="bodyLarge"
          content={`${product.parent ? product.parent : 'N/A'}`}
        />
      </div>
      <div className="mt-2">
        <Paragraph type="body" content={'Description'} />
        <Paragraph
          type="bodyLarge"
          content={`${product.description ? product.description : 'N/A'}`}
        />
      </div>
    </div>
  );
};
export default ProductCard;

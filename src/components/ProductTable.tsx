import TableItem from './Base/TableItem';
import { Product } from '../utils/interfaces';
interface Products {
  products: Array<Product>;
}
const ProductTable = ({ products }: Products) => {
  return (
    <table className="w-full border-spacing-5 hidden tablet:table table-fixed rounded-lg rounded-b-none mb-10">
      <tr className="[&>th]:py-4 border-b border-opacity-50 rounded-lg bg-gray-200">
        <TableItem type="tableHeader">Name</TableItem>
        <TableItem type="tableHeader">Type</TableItem>
        <TableItem type="tableHeader">Quantity</TableItem>
        <TableItem type="tableHeader">Price ($)</TableItem>
        <TableItem type="tableHeader">Failure rate (1/year)</TableItem>
        <TableItem type="tableHeader">Description</TableItem>
        <TableItem type="tableHeader">Parent</TableItem>
      </tr>
      {products.map((product) => (
        <tr className="[&>td]:py-4 border-b border-opacity-50 rounded-lg last-of-type:border-none bg-gray-200">
          <TableItem type="tableData">
            {product.name ? product.name : 'N/A'}
          </TableItem>
          <TableItem type="tableData">
            {product.type ? product.type : 'N/A'}
          </TableItem>
          <TableItem type="tableData">
            {product.quantity ? product.quantity : 'N/A'}
          </TableItem>
          <TableItem type="tableData">
            {product.price ? product.price : 'N/A'}
          </TableItem>
          <TableItem type="tableData">
            {product.failure_rate ? product.failure_rate : 'N/A'}
          </TableItem>
          <TableItem type="tableData">
            {product.description ? product.description : 'N/A'}
          </TableItem>
          <TableItem type="tableData">
            {product.parent ? product.parent : 'N/A'}
          </TableItem>
        </tr>
      ))}
    </table>
  );
};
export default ProductTable;

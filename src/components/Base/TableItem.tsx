import { ReactNode } from 'react';

interface ButtonProps {
  className?: string;
  children: ReactNode | ReactNode[];
  type: 'tableData' | 'tableHeader';
}
const TableItem = ({ className = '', children, type }: ButtonProps) => {
  return (
    <>
      {type === 'tableHeader' ? (
        <th
          className={`font-heading font-bold text-start text-h5 pl-4 whitespace-nowrap overflow-hidden text-ellipsis`}
        >
          {children}
        </th>
      ) : (
        <td
          className={`font-body font-normal first-of-type:pr-4 last-of-type:px-4 px-4 whitespace-nowrap overflow-hidden text-ellipsis ${className}`}
        >
          {children}
        </td>
      )}
    </>
  );
};
export default TableItem;

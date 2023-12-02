import { useCallback, useEffect, useState } from 'react';
import { Product } from '../../utils/interfaces';
import ProductsList from '../ProductsList';
import Papa from 'papaparse';
import Heading from '../Base/Heading';

const HomeView = () => {
  const [products, setProducts] = useState<Array<Product>>([]);

  const getCsvData = useCallback(async () => {
    try {
      const response = await fetch('/product_breakdown.csv');
      const text = await response.text();

      Papa.parse(text, {
        // The callback to be executed when the parsing is complete. Runs function that transforms the parsed data to products type and saves it in products (state).
        complete: (result) => {
          const transformedData = transformCsvDataToProductsType(result.data);
          setProducts(transformedData);
        },
        header: true,
        dynamicTyping: true,
      });
    } catch (error) {
      console.error('Error loading CSV file:', error);
    }
  }, []);

  useEffect(() => {
    getCsvData();
  }, [getCsvData]);
  /**
   * Transforms the parsed data from the csv file into a products array (based on the interface in utils).
   * @param data
   * @returns Returns the array as a products array
   */
  const transformCsvDataToProductsType = (data: any[]): Array<Product> => {
    return data.map((row) => {
      const transformedRow: Product = {
        name: row.Name,
        type: row.Type,
        quantity: row.Quantity,
        failure_rate: parseFloat(row['Failure rate (1/year)']) || null,
        price: row['Price ($)'] || null,
        parent: row.Parent,
        description: row.Description,
      };
      return transformedRow;
    });
  };
  return (
    <main className="bg-gray-50">
      <header className="min-h-[160px] flex items-center justify-center bg-gray-200">
        <Heading
          className="px-4 py-6"
          type="H1"
          content={'Glacier Sightseeing Tours'}
        />
      </header>
      <ProductsList products={products} />
    </main>
  );
};
export default HomeView;

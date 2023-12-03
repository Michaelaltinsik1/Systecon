import { useCallback, useEffect, useState } from 'react';
import { Product } from '../../utils/interfaces';
import ProductsList from '../ProductsList';
import Papa from 'papaparse';
import Heading from '../Base/Heading';
import Pagination from '../Features/Pagination';
import Filters from '../Features/Filters';
const ELEMENTSPERPAGE = 3;
const HomeView = () => {
  const [products, setProducts] = useState<Array<Product>>([]);
  const [filteredProducts, setFilteredProducts] = useState<Array<Product>>([]);
  const [pages, setPages] = useState<number>(0);
  const [currPage, setCurrPage] = useState<number>(1);
  const [priceFilter, setPriceFilter] = useState<string>('');
  const [nameFilter, setNameFilter] = useState<string>('');
  const [quantityFilter, setQuantityFilter] = useState<string>('');

  const updatePriceFilter = (value: string) => {
    setPriceFilter(value);
  };
  const updateNameFilter = (value: string) => {
    setNameFilter(value);
  };
  const updateQuantityFilter = (value: string) => {
    setQuantityFilter(value);
  };
  const clearFilter = () => {
    setPriceFilter('');
    setNameFilter('');
    setQuantityFilter('');
    setFilteredProducts(products);
    setPages(calculateTotalPages(products.length));
    setCurrPage(1);
  };
  const isConvertibleToNumber = (str: string) => {
    return !isNaN(Number(str));
  };
  const applyFiltering = () => {
    const temporalProductStorage: Array<Product> = [];
    products.forEach((product) => {
      let matchAllFilter = {
        priceFilter: false,
        nameFilter: false,
        quantityFilter: false,
      };

      if (priceFilter) {
        if (isConvertibleToNumber(priceFilter) && product.price) {
          const priceAsNumber = product.price.replace(/\D/g, '');
          if (
            isConvertibleToNumber(priceAsNumber) &&
            parseInt(priceAsNumber) >= parseInt(priceFilter)
          ) {
            matchAllFilter.priceFilter = true;
          }
        }
      } else {
        matchAllFilter.priceFilter = true;
      }
      if (nameFilter) {
        if (
          product.name &&
          product.name.toLowerCase().includes(nameFilter.toLowerCase())
        ) {
          matchAllFilter.nameFilter = true;
        }
      } else {
        matchAllFilter.nameFilter = true;
      }
      if (quantityFilter) {
        if (product.quantity && isConvertibleToNumber(quantityFilter)) {
          if (product.quantity >= parseInt(quantityFilter)) {
            matchAllFilter.quantityFilter = true;
          }
        }
      } else {
        matchAllFilter.quantityFilter = true;
      }

      if (
        matchAllFilter.nameFilter &&
        matchAllFilter.priceFilter &&
        matchAllFilter.quantityFilter
      ) {
        temporalProductStorage.push(product);
      }
    });
    setFilteredProducts(temporalProductStorage);
    setPages(calculateTotalPages(temporalProductStorage.length));
    setCurrPage(1);
  };

  const getCsvData = useCallback(async () => {
    try {
      const response = await fetch('/product_breakdown.csv');
      const text = await response.text();

      Papa.parse(text, {
        // The callback to be executed when the parsing is complete. Runs function that transforms the parsed data to products type and saves it in products (state).
        complete: (result) => {
          const transformedData = transformCsvDataToProductsType(result.data);
          setProducts(transformedData);
          setFilteredProducts(transformedData);
          setPages(calculateTotalPages(transformedData.length));
          setCurrPage(1);
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

  const calculateTotalPages = (totalElements: number): number => {
    return Math.ceil(totalElements / ELEMENTSPERPAGE);
  };
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
    <main className="bg-gray-50 min-h-screen flex flex-col">
      <header className="min-h-[160px] flex items-center justify-center bg-gray-200">
        <Heading
          className="px-4 py-6"
          type="H1"
          content={'Glacier Sightseeing Tours'}
        />
      </header>
      <Filters
        applyFiltering={applyFiltering}
        clearFilters={clearFilter}
        nameFilter={nameFilter}
        priceFilter={priceFilter}
        quantityFilter={quantityFilter}
        updateNameFilter={updateNameFilter}
        updatePriceFilter={updatePriceFilter}
        updateQuantityFilter={updateQuantityFilter}
      />
      <ProductsList
        products={filteredProducts}
        currPage={currPage}
        elementsPerPage={ELEMENTSPERPAGE}
      />
      {pages > 0 && (
        <Pagination
          currPage={currPage}
          totalPages={pages}
          setCurrPage={setCurrPage}
        />
      )}
    </main>
  );
};
export default HomeView;

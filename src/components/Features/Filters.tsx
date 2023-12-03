import { useBreakpoint } from '../Hooks/useBreakpoint';
import { useState } from 'react';
import Modal from './Modal';
import Button from '../Base/Button';
import Input from '../Base/Input';
import Heading from '../Base/Heading';

interface FilterProps {
  priceFilter: string;
  nameFilter: string;
  quantityFilter: string;
  updatePriceFilter: (value: string) => void;
  updateNameFilter: (value: string) => void;
  updateQuantityFilter: (value: string) => void;
  applyFiltering: () => void;
  clearFilters: () => void;
}

const Filters = ({
  applyFiltering,
  nameFilter,
  clearFilters,
  priceFilter,
  quantityFilter,
  updateNameFilter,
  updatePriceFilter,
  updateQuantityFilter,
}: FilterProps) => {
  const { isMobile, isTablet } = useBreakpoint();

  return (
    <form className="mt-6 desktop:mt-16 px-4 desktop:px-10">
      {isMobile || isTablet ? (
        <SmallScreenFilterView
          priceFilter={priceFilter}
          nameFilter={nameFilter}
          quantityFilter={quantityFilter}
          clearFilters={clearFilters}
          updatePriceFilter={updatePriceFilter}
          updateNameFilter={updateNameFilter}
          updateQuantityFilter={updateQuantityFilter}
          applyFiltering={applyFiltering}
        />
      ) : (
        <DesktopFilterView
          priceFilter={priceFilter}
          nameFilter={nameFilter}
          quantityFilter={quantityFilter}
          clearFilters={clearFilters}
          updatePriceFilter={updatePriceFilter}
          updateNameFilter={updateNameFilter}
          updateQuantityFilter={updateQuantityFilter}
          applyFiltering={applyFiltering}
        />
      )}
    </form>
  );
};
export default Filters;

const DesktopFilterView = ({
  priceFilter,
  updatePriceFilter,
  nameFilter,
  updateNameFilter,
  quantityFilter,
  updateQuantityFilter,
  clearFilters,
  applyFiltering,
}: FilterProps) => {
  return (
    <div className="flex justify-between">
      <div className="flex [&>label:nth-child(2)]:mx-8">
        <Input
          type="text"
          label=""
          name="name"
          placeholder="Filter by name"
          value={nameFilter}
          onChangeHandler={updateNameFilter}
        />
        <Input
          label=""
          type="text"
          name="price"
          placeholder="Filter by price"
          value={priceFilter}
          onChangeHandler={updatePriceFilter}
        />
        <Input
          type="text"
          label=""
          name="quantity"
          placeholder="Filter by quantity"
          value={quantityFilter}
          onChangeHandler={updateQuantityFilter}
        />
      </div>
      <div className="flex">
        <Button
          type="button"
          onClick={applyFiltering}
          className="mr-4"
          variant="addButton"
        >
          Apply filters
        </Button>
        <Button
          onClick={clearFilters}
          type="button"
          className="ml-4"
          variant="clearButton"
        >
          Clear filters
        </Button>
      </div>
    </div>
  );
};
const SmallScreenFilterView = ({
  priceFilter,
  updatePriceFilter,
  nameFilter,
  updateNameFilter,
  quantityFilter,
  updateQuantityFilter,
  clearFilters,
  applyFiltering,
}: FilterProps) => {
  const [isFiltersVisible, setFilterVisibility] = useState<boolean>(false);
  const closeFilters = () => {
    setFilterVisibility(false);
  };
  const showFilters = () => {
    setFilterVisibility(true);
  };
  const closeAndApplyFilters = () => {
    setFilterVisibility(false);
    applyFiltering();
  };

  return (
    <div>
      <Button
        className="mb-5"
        onClick={showFilters}
        type="button"
        variant="addButton"
      >
        Show filter options
      </Button>
      <Button onClick={clearFilters} type="button" variant="clearButton">
        Clear filters
      </Button>
      {isFiltersVisible && (
        <Modal handleOnClick={closeFilters}>
          <Heading type="H2" content={'Filters'} className="mb-6" />
          <Input
            type="text"
            label="Filter by name"
            name="name"
            placeholder="Helicopter"
            value={nameFilter}
            onChangeHandler={updateNameFilter}
          />
          <div className="my-5">
            <Input
              label="Filter by price"
              type="text"
              name="price"
              placeholder="150"
              value={priceFilter}
              onChangeHandler={updatePriceFilter}
            />
          </div>
          <Input
            type="text"
            label="Filter by quantity"
            name="quantity"
            placeholder="7"
            value={quantityFilter}
            onChangeHandler={updateQuantityFilter}
          />
          <Button
            className="mt-8"
            onClick={closeAndApplyFilters}
            type="button"
            variant="addButton"
          >
            Apply filters
          </Button>
        </Modal>
      )}
    </div>
  );
};

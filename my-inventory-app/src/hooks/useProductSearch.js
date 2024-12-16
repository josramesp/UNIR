import { useState, useEffect } from 'react';
import { getMockData } from '../utils/mockData';

function useProductSearch(query) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const filteredProducts = getMockData().filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setProducts(filteredProducts);
  }, [query]);

  return products;
}

export default useProductSearch;

import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';
import useProductSearch from '../hooks/useProductSearch';

function InventoryPage() {
  const [query, setQuery] = useState('');
  const products = useProductSearch(query);

  return (
    <div className="inventory-page">
      <SearchBar onSearch={setQuery} />
      <ProductList products={products} />
    </div>
  );
}

export default InventoryPage;

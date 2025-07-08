import React, { useEffect, useState } from 'react';
import './Search.css';
import Search from './Search';
import Product from './Product';
import productsSchema from './Cars';

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 300); // delay

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const filteredProducts = debouncedSearch
    ? productsSchema.filter((p) => {
        const v = debouncedSearch.toLowerCase();
        return (
          p.model.toLowerCase().includes(v) ||
          p.year.toString().includes(v) ||
          p.about.toLowerCase().includes(v)
        );
      })
    : [];

  return (
    <div style={{ position: 'relative' }}>
      <Search
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onClear={() => setSearchTerm('')}
      />
      {debouncedSearch && (
        <div className="linkList">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((p) => (
              <Product key={p.id} model={p.model} id={p.id} />
            ))
          ) : (
            <div className="link">No results found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchFilter;

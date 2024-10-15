import React, { useState } from 'react';
import Fuse from 'fuse.js';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [matchedSarees, setMatchedSarees] = useState([]); // State for matched sarees
  
  // Dummy data for sarees
  const sareeData = [
    { id: 1, name: 'Banarasi Silk', category: 'Silk', price: 5000 },
    { id: 2, name: 'Kanjivaram Silk', category: 'Silk', price: 7000 },
    { id: 3, name: 'Cotton Saree', category: 'Cotton', price: 1500 },
    { id: 4, name: 'Chiffon Saree', category: 'Chiffon', price: 2500 },
    { id: 5, name: 'Georgette Saree', category: 'Georgette', price: 3000 },
  ];
  
  
  const fuse = new Fuse(sareeData, {
    keys: ['name', 'category'], 
    includeScore: true, 
  });

  
  const handleSearch = (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);
    
    
    const results = fuse.search(inputValue);
    
    // Update the matched sarees state
    const foundSarees = results.map(result => result.item);
    setMatchedSarees(foundSarees);
  };

  return (
    <div>
      <input 
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search for sarees..."
      />
      {query && matchedSarees.length > 0 && ( // Only show results if there are matched sarees
        <div>
          <h3>Search Results:</h3>
          <ul>
            {matchedSarees.map(saree => (
              <li key={saree.id}>
                {saree.name} - {saree.category} (${saree.price})
              </li>
            ))}
          </ul>
        </div>
      )}
      {query && matchedSarees.length === 0 && ( // Display if no results found
        <div>
          <h3>No results found</h3>
        </div>
      )}
    </div>
  );
};

export default SearchBar;

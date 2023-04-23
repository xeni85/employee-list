import React from 'react'

const SearchBar = () => {
    return (
        <form>
          <input
          className='search-bar-input'
            type="text"
            placeholder="Search..."
          />
          <button type="submit" className='search-bar-button'>Search</button>
        </form>
      );
}

export default SearchBar
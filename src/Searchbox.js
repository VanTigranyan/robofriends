import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <input 
        className="pa3 ba b--green bg-light-blue"
        type="search"
        onChange= {searchChange} 
        placeholder="Search Robots"/>
    )
}

export default SearchBox;
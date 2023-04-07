import React from "react";

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className="pa2">
            <input
                className="pa2 ba bg-light-gray"
                type='search'
                placeholder="search" 
                onChange={searchChange}
            />

        </div>
    );
}

export default SearchBox;
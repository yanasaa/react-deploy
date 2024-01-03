import { useState } from "react";

function SearchBar() {
  const [isActive, setIsActive] = useState(false)
    return (
        <div className="search-bar">
          {isActive && <input className="search__input" type="search" placeholder="Поиск" />}
          <div className="search__icons">
            <span className="icon search__icon" onClick={e => setIsActive(!isActive)}></span>
          </div>
        </div>
    )
}

export default SearchBar;
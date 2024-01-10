import { useState } from "react";
import Input from "../input/Input";
import './SearchBar.scss';

function SearchBar(props) {
  const {className} = props;
  const [isActive, setIsActive] = useState(false)
    return (
        <div className={className}>
          {isActive && <Input className="search__input" type="search" placeholder="Поиск" />}
          <div className="search__icons">
            <span className="icon search__icon" onClick={e => setIsActive(!isActive)}></span>
          </div>
        </div>
    )
}

export default SearchBar;
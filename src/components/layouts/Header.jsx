import Navigation from "../Navigation";
import SearchBar from "../SearchBar";

function Header() {
 return (
    <header className="header">
       <div className="wrapper header__wrapper">
       <Navigation />
        <a href="#"><span className="logo header__logo"></span></a>
        
        <div className="header__buttons">
          {/* <button className="button button_bordered" disabled>Регистрация</button> */}
          <SearchBar />
          <button className="button button_colored">Войти</button>
        </div>
      </div>
    </header>
 )
}

export default Header;